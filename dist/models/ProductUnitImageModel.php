<?php
    namespace Src\App\Models;
    
    use Exception;
    use Src\Core\Model;
    
	/**
     * Short ProductUnitImage Description
     *
     * Long ProductUnitImage Description
     *
     * @package            Application\App
     * @subpackage         Controllers
     */
    class ProductUnitImageModel extends Model
    {
    
    
		
		protected static $dbTable = "product_unit_image";
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
