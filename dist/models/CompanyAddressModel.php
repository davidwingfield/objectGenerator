<?php
    namespace Src\App\Models;
    
    use Exception;
    use Src\Core\Model;
    
	/**
     * Short CompanyAddress Description
     *
     * Long CompanyAddress Description
     *
     * @package            Application\App
     * @subpackage         Controllers
     */
    class CompanyAddressModel extends Model
    {
    
    
		
		protected static $dbTable = "company_address";
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
