    
const ProvinceApi = (function () {
    'use strict'
    
    const base_url = '/province_api'
    const _input_province_api_province_id = document.getElementById('input_province_api_province_id')
	const _input_province_api_api_id = document.getElementById('input_province_api_api_id')
	const _input_province_api_api_province_id = document.getElementById('input_province_api_api_province_id')
	const _input_province_api_enabled = document.getElementById('input_province_api_enabled')
	const _input_province_api_date_created = document.getElementById('input_province_api_date_created')
	const _input_province_api_created_by = document.getElementById('input_province_api_created_by')
	const _input_province_api_date_modified = document.getElementById('input_province_api_date_modified')
	const _input_province_api_modified_by = document.getElementById('input_province_api_modified_by')
	const _input_province_api_note = document.getElementById('input_province_api_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_province_api_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            province_id: null,
			api_id: null,
			api_province_id: null,
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
    
    
        const get = function(){
            let data_to_send = {}
            
        }  
        
    
    const set = function (province_api) {
        let detail = _default_detail()
        if (province_api) {
            detail.province_id = (province_api.province_id)?province_api.province_id:null
			detail.api_id = (province_api.api_id)?province_api.api_id:null
			detail.api_province_id = (province_api.api_province_id)?province_api.api_province_id:null
			detail.enabled = (province_api.enabled)?province_api.enabled:1
			detail.date_created = (province_api.date_created)?province_api.date_created:formatDateMySQL()
			detail.created_by = (province_api.created_by)?province_api.created_by:created_by
			detail.date_modified = (province_api.date_modified)?province_api.date_modified:formatDateMySQL()
			detail.modified_by = (province_api.modified_by)?province_api.modified_by:modified_by
			detail.note = (province_api.note)?province_api.note:null
        }
        
        ProvinceApi.detail = detail
        return detail
    }
    
    const load_all = function (province_apis) {
        ProvinceApi.all = new Map()
    
        if (!province_apis) {
            return
        }
        $.each(province_apis, function (i, province_api) {
            let detail = set(province_api)
            ProvinceApi.all.set(detail)
        })
        
        console.log(' ProvinceApi.all',  ProvinceApi.all);
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

ProvinceApi.init()
//end object
