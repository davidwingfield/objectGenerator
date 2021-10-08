<?php

    require_once("libs/MysqliDb.php");
    require_once("libs/dbObject.php");
    require_once("libs/Inflect.php");
    require_once("libs/functions.php");

    define("ROOT_PATH", $_SERVER["DOCUMENT_ROOT"] . "/generator");

    $ini = [];
    if (file_exists(ROOT_PATH . "/app.ini")) {
        $ini = parse_ini_file_multi(ROOT_PATH . "/app.ini", true);
    } else {
        var_dump(ROOT_PATH . "/app.ini", 1);
        die("ini not found");
    }

    define("DBPASS", $ini["database"]["db_pass"]);
    define("DBHOST", $ini["database"]["db_host"]);
    define("DBNAME", $ini["database"]["db_name"]);
    define("DBUSER", $ini["database"]["db_user"]);
    define("DBPORT", $ini["database"]["db_port"]);
    define("DBPERSISTENT", $ini["database"]["db_persistent"]);
    define("DBLOGINATTEMPTS", $ini["database"]["db_loginattempts"]);
    define("EXPIRETIME", $ini["database"]["expire_time"]);

    $db = new MysqliDb(DBHOST, DBUSER, DBPASS, DBNAME);

    function getTableFields($table)
    {
        global $db;
        $sql = "
	SELECT 	*
	FROM 	INFORMATION_SCHEMA.COLUMNS
	WHERE 	table_name = '$table';
";

        $fields = $db->rawQuery($sql);
        var_dump($fields, 1);

        return $fields;
    }

    function getCamelCase($name)
    {
        $temp = str_replace('_', ' ', $name);
        $upperCase = ucwords($temp);

        return str_replace(' ', '', $upperCase);
    }

    function buildController($name, $fields = [])
    {
        /*
        $COLUMN_NAME 				= (isset($fields["COLUMN_NAME"]))?$fields["COLUMN_NAME"]:null;
        $ORDINAL_POSITION 			= (isset($fields["ORDINAL_POSITION"]))?$fields["ORDINAL_POSITION"]:null;
        $COLUMN_DEFAULT 			= (isset($fields["COLUMN_DEFAULT"]))?$fields["COLUMN_DEFAULT"]:null;
        $IS_NULLABLE 				= (isset($fields["IS_NULLABLE"]))?$fields["IS_NULLABLE"]:null;
        $DATA_TYPE 					= (isset($fields["DATA_TYPE"]))?$fields["DATA_TYPE"]:null;
        $CHARACTER_MAXIMUM_LENGTH 	= (isset($fields["CHARACTER_MAXIMUM_LENGTH"]))?$fields["CHARACTER_MAXIMUM_LENGTH"]:null;
        $CHARACTER_OCTET_LENGTH 	= (isset($fields["CHARACTER_OCTET_LENGTH"]))?$fields["CHARACTER_OCTET_LENGTH"]:null;
        $NUMERIC_PRECISION	 		= (isset($fields["NUMERIC_PRECISION"]))?$fields["NUMERIC_PRECISION"]:null;
        $NUMERIC_SCALE 				= (isset($fields["NUMERIC_SCALE"]))?$fields["NUMERIC_SCALE"]:null;
        $DATETIME_PRECISION 		= (isset($fields["DATETIME_PRECISION"]))?$fields["DATETIME_PRECISION"]:null;
        $CHARACTER_SET_NAME 		= (isset($fields["CHARACTER_SET_NAME"]))?$fields["CHARACTER_SET_NAME"]:null;
        $COLLATION_NAME 			= (isset($fields["COLLATION_NAME"]))?$fields["COLLATION_NAME"]:null;
        $COLUMN_TYPE 				= (isset($fields["COLUMN_TYPE"]))?$fields["COLUMN_TYPE"]:null;
        $COLUMN_KEY 				= (isset($fields["COLUMN_KEY"]))?$fields["COLUMN_KEY"]:null;
        $EXTRA 						= (isset($fields["EXTRA"]))?$fields["EXTRA"]:null;
        $PRIVILEGES 				= (isset($fields["PRIVILEGES"]))?$fields["PRIVILEGES"]:null;
        $COLUMN_COMMENT 			= (isset($fields["COLUMN_COMMENT"]))?$fields["COLUMN_COMMENT"]:null;
        $GENERATION_EXPRESSION 		= (isset($fields["GENERATION_EXPRESSION"]))?$fields["GENERATION_EXPRESSION"]:null;
        //*/
        $controllerDirectory = __DIR__ . "/dist/controllers/";
        $cCase = getCamelCase($name);
        $uCase = strtoupper($name);
        $fileName = $cCase . ".php";
        $controller_template = "
<?php
    namespace Src\App\Controllers;

    use Src\Core\Controller;

	/**
     * Short $cCase Description
     *
     * Long $cCase Description
     *
     * @package            Application\App
     * @subpackage         Controllers
     */
    class $cCase extends Controller
    {
        public function __construct()
        {
            parent::__construct();
        }
    }
";
        //echo "$controllerDirectory$fileName<br>";
        $controllerFile = fopen("$controllerDirectory$fileName", "w") or die("Unable to open file!");
        fwrite($controllerFile, $controller_template);
        fclose($controllerFile);
    }

    function buildModel($name, $fields = [])
    {

        $modelDirectory = __DIR__ . "/dist/models/";
        $cCase = getCamelCase($name);
        $uCase = strtoupper($name);
        $fileName = $cCase . "Model.php";

        $model_template = "<?php
    namespace Src\App\Models;
    
    use Exception;
    use Src\Core\Model;
    
	/**
     * Short $cCase Description
     *
     * Long $cCase Description
     *
     * @package            Application\App
     * @subpackage         Controllers
     */
    class ${cCase}Model extends Model
    {
    
    ";
        $model_template .= '
		
		protected static $dbTable = "' . $name . '";
		protected static $dbFields = Array (
			
		);
		
		public static function get(int $id = null): array
        {
            
			try{
			if (!is_null($id)) {
                Model::$db->where("id", $id);
            }

            Model::$db->where("enabled", 1);
				return Model::$db->get(self::$dbTable);
				} catch(Exception $e){
					return [];
				}
        }
        
        public static function getOne(int $id = null): array
        {
			try{
			if (!is_null($id)) {
                Model::$db->where("id", $id);
            }

            Model::$db->where("enabled", 1);
				return Model::$db->getOne(self::$dbTable);
				} catch(Exception $e){
					return [];
				}
        }
        
        public static function update(array $params = []): array
        {
            $id = 1;
            return self::get($id);
        }
    }
';
        //echo "$controllerDirectory$fileName<br>";
        $modelFile = fopen("$modelDirectory$fileName", "w") or die("Unable to open file!");
        fwrite($modelFile, $model_template);
        fclose($modelFile);
    }

    function formatScriptDefault($datatype)
    {
        switch ($datatype) {
            case "datetime":
                return "formatDateMySQL()";
            case "tinyint":
                return 1;

            default:
                return "null";
        }
    }

    function buildFieldConstant($fields = []): string
    {
        $fieldConstants = [];
        foreach ($fields AS $field) {
            //*
            $TABLE_CATALOG = (isset($field["TABLE_CATALOG"])) ? $field["TABLE_CATALOG"] : null;
            $TABLE_SCHEMA = (isset($field["TABLE_SCHEMA"])) ? $field["TABLE_SCHEMA"] : null;
            $TABLE_NAME = (isset($field["TABLE_NAME"])) ? $field["TABLE_NAME"] : null;
            $COLUMN_NAME = (isset($field["COLUMN_NAME"])) ? $field["COLUMN_NAME"] : null;
            $ORDINAL_POSITION = (isset($field["ORDINAL_POSITION"])) ? $field["ORDINAL_POSITION"] : null;
            $COLUMN_DEFAULT = (isset($field["COLUMN_DEFAULT"])) ? $field["COLUMN_DEFAULT"] : 'null';
            $IS_NULLABLE = (isset($field["IS_NULLABLE"])) ? $field["IS_NULLABLE"] : null;
            $DATA_TYPE = (isset($field["DATA_TYPE"])) ? $field["DATA_TYPE"] : null;
            $CHARACTER_MAXIMUM_LENGTH = (isset($field["CHARACTER_MAXIMUM_LENGTH"])) ? $field["CHARACTER_MAXIMUM_LENGTH"] : null;
            $CHARACTER_OCTET_LENGTH = (isset($field["CHARACTER_OCTET_LENGTH"])) ? $field["CHARACTER_OCTET_LENGTH"] : null;
            $NUMERIC_PRECISION = (isset($field["NUMERIC_PRECISION"])) ? $field["NUMERIC_PRECISION"] : null;
            $NUMERIC_SCALE = (isset($field["NUMERIC_SCALE"])) ? $field["NUMERIC_SCALE"] : null;
            $DATETIME_PRECISION = (isset($field["DATETIME_PRECISION"])) ? $field["DATETIME_PRECISION"] : null;
            $CHARACTER_SET_NAME = (isset($field["CHARACTER_SET_NAME"])) ? $field["CHARACTER_SET_NAME"] : null;
            $COLLATION_NAME = (isset($field["COLLATION_NAME"])) ? $field["COLLATION_NAME"] : null;
            $COLUMN_TYPE = (isset($field["COLUMN_TYPE"])) ? $field["COLUMN_TYPE"] : null;
            $COLUMN_KEY = (isset($field["COLUMN_KEY"])) ? $field["COLUMN_KEY"] : null;
            $EXTRA = (isset($field["EXTRA"])) ? $field["EXTRA"] : null;
            $PRIVILEGES = (isset($field["PRIVILEGES"])) ? $field["PRIVILEGES"] : null;
            $COLUMN_COMMENT = (isset($field["COLUMN_COMMENT"])) ? $field["COLUMN_COMMENT"] : null;
            $GENERATION_EXPRESSION = (isset($field["GENERATION_EXPRESSION"])) ? $field["GENERATION_EXPRESSION"] : null;
            //*/
            /*
            echo "<div style='margin-left:.5rem;'>";
            echo "<h5 style='margin-left:.5rem;'></h5>";
            echo "<pre style='margin-left:.5rem;'>" . var_export($field, 1) . "</pre>";
            echo "</div>";
            //*/
            $fieldName = "input_" . $TABLE_NAME . "_" . $COLUMN_NAME;
            $fieldConstants[] = "const _$fieldName = document.getElementById('$fieldName')";
        }

        return implode("\n\t", $fieldConstants);
    }

    function buildScriptsDefault($fields = []): array
    {
        //*
        echo "<div style='margin-left:.5rem;'>";
        echo "<h5 style='margin-left:.5rem;'></h5>";
        echo "<pre style='margin-left:.5rem;'>" . var_export($fields, 1) . "</pre>";
        echo "</div>";
        //*/
        $defaultValue = [];
        $loadValues = [];
        $keys = [];
        foreach ($fields AS $field) {
            //*
            $TABLE_CATALOG = (isset($field["TABLE_CATALOG"])) ? $field["TABLE_CATALOG"] : null;
            $TABLE_SCHEMA = (isset($field["TABLE_SCHEMA"])) ? $field["TABLE_SCHEMA"] : null;
            $TABLE_NAME = (isset($field["TABLE_NAME"])) ? $field["TABLE_NAME"] : null;
            $COLUMN_NAME = (isset($field["COLUMN_NAME"])) ? $field["COLUMN_NAME"] : null;
            $ORDINAL_POSITION = (isset($field["ORDINAL_POSITION"])) ? $field["ORDINAL_POSITION"] : null;
            $COLUMN_DEFAULT = (isset($field["COLUMN_DEFAULT"])) ? $field["COLUMN_DEFAULT"] : 'null';
            $IS_NULLABLE = (isset($field["IS_NULLABLE"])) ? $field["IS_NULLABLE"] : null;
            $DATA_TYPE = (isset($field["DATA_TYPE"])) ? $field["DATA_TYPE"] : null;
            $CHARACTER_MAXIMUM_LENGTH = (isset($field["CHARACTER_MAXIMUM_LENGTH"])) ? $field["CHARACTER_MAXIMUM_LENGTH"] : null;
            $CHARACTER_OCTET_LENGTH = (isset($field["CHARACTER_OCTET_LENGTH"])) ? $field["CHARACTER_OCTET_LENGTH"] : null;
            $NUMERIC_PRECISION = (isset($field["NUMERIC_PRECISION"])) ? $field["NUMERIC_PRECISION"] : null;
            $NUMERIC_SCALE = (isset($field["NUMERIC_SCALE"])) ? $field["NUMERIC_SCALE"] : null;
            $DATETIME_PRECISION = (isset($field["DATETIME_PRECISION"])) ? $field["DATETIME_PRECISION"] : null;
            $CHARACTER_SET_NAME = (isset($field["CHARACTER_SET_NAME"])) ? $field["CHARACTER_SET_NAME"] : null;
            $COLLATION_NAME = (isset($field["COLLATION_NAME"])) ? $field["COLLATION_NAME"] : null;
            $COLUMN_TYPE = (isset($field["COLUMN_TYPE"])) ? $field["COLUMN_TYPE"] : null;
            $COLUMN_KEY = (isset($field["COLUMN_KEY"])) ? $field["COLUMN_KEY"] : null;
            $EXTRA = (isset($field["EXTRA"])) ? $field["EXTRA"] : null;
            $PRIVILEGES = (isset($field["PRIVILEGES"])) ? $field["PRIVILEGES"] : null;
            $COLUMN_COMMENT = (isset($field["COLUMN_COMMENT"])) ? $field["COLUMN_COMMENT"] : null;
            $GENERATION_EXPRESSION = (isset($field["GENERATION_EXPRESSION"])) ? $field["GENERATION_EXPRESSION"] : null;
            //*/
            /*
            echo "<div style='margin-left:.5rem;'>";
            echo "<h5 style='margin-left:.5rem;'>$COLUMN_NAME</h5>";
            echo "<pre style='margin-left:.5rem;'>" . var_export($field, 1) . "</pre>";
            echo "</div>";
            //*/

            $propertyName = $TABLE_NAME . "." . $COLUMN_NAME;
            if ($COLUMN_KEY === "PRI") {
                $keys[] = $COLUMN_NAME;
            }
            if ($COLUMN_NAME === "created_by" || $COLUMN_NAME === "modified_by") {
                $test = "$COLUMN_NAME: user_id";
                $test2 = "detail.$COLUMN_NAME = ($propertyName)?$propertyName:$COLUMN_NAME";
                $loadValues[] = $test2;
                $defaultValue[] = $test;
            } else {
                $generatedDefault = formatScriptDefault($DATA_TYPE);
                $test = "$COLUMN_NAME: $generatedDefault";
                $test2 = "detail.$COLUMN_NAME = ($propertyName)?$propertyName:$generatedDefault";
                $defaultValue[] = $test;
                $loadValues[] = $test2;
            }

        }

        $default = implode(",\n\t\t\t", $defaultValue);
        $loadP = implode("\n\t\t\t", $loadValues);

        $tempReturn = array(
            "default_values" => $default,
            "load_values" => $loadP,
            "keys" => $keys,
        );

        return $tempReturn;
    }

    function buildScripts($name, $fields = [])
    {
        $inflect = new Inflect();
        // ----
        $scriptDirectory = __DIR__ . "/dist/scripts/";
        $cCase = getCamelCase($name);
        $uCase = strtoupper($name);
        $plural = $inflect->pluralize($name);
        $fileName = $name . ".js";
        $getUrl = "";
        // ----
        $constants = buildFieldConstant($fields);
        $detail = buildScriptsDefault($fields);
        $default = $detail["default_values"];
        $load = $detail["load_values"];
        $keys = $detail["keys"];
        $loadMap = "$cCase.all.set(detail)";
        $loadGetFunction = "
        const get = function(){
            let data_to_send = {}
            
        }  
        ";

        if (count($keys) === 0) {
            $loadMap = "";
        } else if (count($keys) === 1) {
            $key = $keys[0];
            $loadMap = "$cCase.all.set('$key', detail)";
            $loadGetFunction = "
            const get = function($key){
                let data_to_send = {}
                if($key){
                    data_to_send.$key = $key
                }
                
            }  
            ";
        }

        /*
        echo "<div style='margin-left:.5rem;'>";
        echo "<h5 style='margin-left:.5rem;'>buildScripts</h5>";
        echo "<pre style='margin-left:.5rem;'>" . var_export($fields, 1) . "</pre>";
        echo "</div>";
        //*/
        $script_template = "    
const $cCase = (function () {
    'use strict'
    
    const base_url = '/$name'
    $constants
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_${name}_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            $default
        }
    }
    
    const save = function(params){
    
    }
    
    $loadGetFunction
    
    const set = function ($name) {
        let detail = _default_detail()
        if ($name) {
            $load
        }
        
        $cCase.detail = detail
        return detail
    }
    
    const load_all = function ($plural) {
        $cCase.all = new Map()
    
        if (!$plural) {
            return
        }
        $.each($plural, function (i, $name) {
            let detail = set($name)
            $loadMap
        })
        
        console.log(' $cCase.all',  $cCase.all);
    }
    
    return {
        validator: null,
        detail: {},
        all: new Map(),
        get:function(params){
            get(params)
        },
        load_all: function(params){
            load_all(params);
        },
        save:function(params){
           save(params); 
        },
        init: function () {
            set()
        },
    }

})()

$cCase.init()
//end object
";
        //*
        echo "<div style='margin-left:.5rem;'>";
        echo "<h5 style='margin-left:.5rem;'>buildScripts</h5>";
        echo "<pre style='margin-left:.5rem;'>" . var_export($fields, 1) . "</pre>";
        echo "</div>";
        //*/
        $scriptFile = fopen("$scriptDirectory$fileName", "w") or die("Unable to open file!");
        fwrite($scriptFile, $script_template);
        fclose($scriptFile);
    }

    function createObjects($table)
    {
        /*
        echo "<div style='margin-left:.5rem;'>";
        echo "<h5 style='margin-left:.5rem;'></h5>";
        echo "<pre style='margin-left:.5rem;'>".var_export($table, 1)."</pre>";
        echo "</div>";
        //*/
        $TABLE_CATALOG = $table["TABLE_CATALOG"];
        $TABLE_SCHEMA = $table["TABLE_SCHEMA"];
        $TABLE_NAME = $table["TABLE_NAME"];
        $TABLE_TYPE = $table["TABLE_TYPE"];
        $ENGINE = $table["ENGINE"];
        $VERSION = $table["VERSION"];
        $ROW_FORMAT = $table["ROW_FORMAT"];
        $TABLE_ROWS = $table["TABLE_ROWS"];
        $AVG_ROW_LENGTH = $table["AVG_ROW_LENGTH"];
        $DATA_LENGTH = $table["DATA_LENGTH"];
        $MAX_DATA_LENGTH = $table["MAX_DATA_LENGTH"];
        $INDEX_LENGTH = $table["INDEX_LENGTH"];
        $DATA_FREE = $table["DATA_FREE"];
        $AUTO_INCREMENT = $table["AUTO_INCREMENT"];
        $CREATE_TIME = $table["CREATE_TIME"];
        $UPDATE_TIME = $table["UPDATE_TIME"];
        $CHECK_TIME = $table["CHECK_TIME"];
        $TABLE_COLLATION = $table["TABLE_COLLATION"];
        $CHECKSUM = $table["CHECKSUM"];
        $CREATE_OPTIONS = $table["CREATE_OPTIONS"];
        $TABLE_COMMENT = $table["TABLE_COMMENT"];

        $table_fields = getTableFields($TABLE_NAME);
        buildScripts($TABLE_NAME, $table_fields);
        buildModel($TABLE_NAME, $table_fields);
    }

    exe();
?>
