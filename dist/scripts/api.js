    
const Api = (function () {
    'use strict'
    
    const base_url = '/api'
    const _input_api_id = document.getElementById('input_api_id')
	const _input_api_name = document.getElementById('input_api_name')
	const _input_api_username = document.getElementById('input_api_username')
	const _input_api_password = document.getElementById('input_api_password')
	const _input_api_wsdl = document.getElementById('input_api_wsdl')
	const _input_api_headerNameSpace = document.getElementById('input_api_headerNameSpace')
	const _input_api_enabled = document.getElementById('input_api_enabled')
	const _input_api_date_created = document.getElementById('input_api_date_created')
	const _input_api_created_by = document.getElementById('input_api_created_by')
	const _input_api_date_modified = document.getElementById('input_api_date_modified')
	const _input_api_modified_by = document.getElementById('input_api_modified_by')
	const _input_api_note = document.getElementById('input_api_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_api_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			name: null,
			username: null,
			password: null,
			wsdl: null,
			headerNameSpace: null,
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
    
    
            const get = function(id){
                let data_to_send = {}
                if(id){
                    data_to_send.id = id
                }
                
            }  
            
    
    const set = function (api) {
        let detail = _default_detail()
        if (api) {
            detail.id = (api.id)?api.id:null
			detail.name = (api.name)?api.name:null
			detail.username = (api.username)?api.username:null
			detail.password = (api.password)?api.password:null
			detail.wsdl = (api.wsdl)?api.wsdl:null
			detail.headerNameSpace = (api.headerNameSpace)?api.headerNameSpace:null
			detail.enabled = (api.enabled)?api.enabled:1
			detail.date_created = (api.date_created)?api.date_created:formatDateMySQL()
			detail.created_by = (api.created_by)?api.created_by:created_by
			detail.date_modified = (api.date_modified)?api.date_modified:formatDateMySQL()
			detail.modified_by = (api.modified_by)?api.modified_by:modified_by
			detail.note = (api.note)?api.note:null
        }
        
        Api.detail = detail
        return detail
    }
    
    const load_all = function (apis) {
        Api.all = new Map()
    
        if (!apis) {
            return
        }
        $.each(apis, function (i, api) {
            let detail = set(api)
            Api.all.set('id', detail)
        })
        
        console.log(' Api.all',  Api.all);
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

Api.init()
//end object
