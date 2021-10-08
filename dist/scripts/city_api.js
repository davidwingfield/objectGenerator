    
const CityApi = (function () {
    'use strict'
    
    const base_url = '/city_api'
    const _input_city_api_city_id = document.getElementById('input_city_api_city_id')
	const _input_city_api_api_id = document.getElementById('input_city_api_api_id')
	const _input_city_api_api_city_id = document.getElementById('input_city_api_api_city_id')
	const _input_city_api_enabled = document.getElementById('input_city_api_enabled')
	const _input_city_api_date_created = document.getElementById('input_city_api_date_created')
	const _input_city_api_created_by = document.getElementById('input_city_api_created_by')
	const _input_city_api_date_modified = document.getElementById('input_city_api_date_modified')
	const _input_city_api_modified_by = document.getElementById('input_city_api_modified_by')
	const _input_city_api_note = document.getElementById('input_city_api_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_city_api_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            city_id: null,
			api_id: null,
			api_city_id: null,
			enabled: 1,
			date_created: formatDateMySQL(),
			created_by: user_id,
			date_modified: formatDateMySQL(),
			modified_by: user_id,
			note: null
        }
    }
    
    const save = function(params){
    
    }
    
    
            const get = function(city_id){
                let data_to_send = {}
                if(city_id){
                    data_to_send.city_id = city_id
                }
                
            }  
            
    
    const set = function (city_api) {
        let detail = _default_detail()
        if (city_api) {
            detail.city_id = (city_api.city_id)?city_api.city_id:null
			detail.api_id = (city_api.api_id)?city_api.api_id:null
			detail.api_city_id = (city_api.api_city_id)?city_api.api_city_id:null
			detail.enabled = (city_api.enabled)?city_api.enabled:1
			detail.date_created = (city_api.date_created)?city_api.date_created:formatDateMySQL()
			detail.created_by = (city_api.created_by)?city_api.created_by:created_by
			detail.date_modified = (city_api.date_modified)?city_api.date_modified:formatDateMySQL()
			detail.modified_by = (city_api.modified_by)?city_api.modified_by:modified_by
			detail.note = (city_api.note)?city_api.note:null
        }
        
        CityApi.detail = detail
        return detail
    }
    
    const load_all = function (city_apis) {
        CityApi.all = new Map()
    
        if (!city_apis) {
            return
        }
        $.each(city_apis, function (i, city_api) {
            let detail = set(city_api)
            CityApi.all.set('city_id', detail)
        })
        
        console.log(' CityApi.all',  CityApi.all);
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

CityApi.init()
//end object
