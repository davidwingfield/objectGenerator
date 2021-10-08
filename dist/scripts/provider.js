    
const Provider = (function () {
    'use strict'
    
    const base_url = '/provider'
    const _input_provider_id = document.getElementById('input_provider_id')
	const _input_provider_company_id = document.getElementById('input_provider_company_id')
	const _input_provider_location_id = document.getElementById('input_provider_location_id')
	const _input_provider_code_direct_id = document.getElementById('input_provider_code_direct_id')
	const _input_provider_provider_vendor = document.getElementById('input_provider_provider_vendor')
	const _input_provider_email = document.getElementById('input_provider_email')
	const _input_provider_website = document.getElementById('input_provider_website')
	const _input_provider_enabled = document.getElementById('input_provider_enabled')
	const _input_provider_date_created = document.getElementById('input_provider_date_created')
	const _input_provider_created_by = document.getElementById('input_provider_created_by')
	const _input_provider_date_modified = document.getElementById('input_provider_date_modified')
	const _input_provider_modified_by = document.getElementById('input_provider_modified_by')
	const _input_provider_note = document.getElementById('input_provider_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_provider_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			company_id: null,
			location_id: null,
			code_direct_id: null,
			provider_vendor: 1,
			email: null,
			website: null,
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
            
    
    const set = function (provider) {
        let detail = _default_detail()
        if (provider) {
            detail.id = (provider.id)?provider.id:null
			detail.company_id = (provider.company_id)?provider.company_id:null
			detail.location_id = (provider.location_id)?provider.location_id:null
			detail.code_direct_id = (provider.code_direct_id)?provider.code_direct_id:null
			detail.provider_vendor = (provider.provider_vendor)?provider.provider_vendor:1
			detail.email = (provider.email)?provider.email:null
			detail.website = (provider.website)?provider.website:null
			detail.enabled = (provider.enabled)?provider.enabled:1
			detail.date_created = (provider.date_created)?provider.date_created:formatDateMySQL()
			detail.created_by = (provider.created_by)?provider.created_by:created_by
			detail.date_modified = (provider.date_modified)?provider.date_modified:formatDateMySQL()
			detail.modified_by = (provider.modified_by)?provider.modified_by:modified_by
			detail.note = (provider.note)?provider.note:null
        }
        
        Provider.detail = detail
        return detail
    }
    
    const load_all = function (providers) {
        Provider.all = new Map()
    
        if (!providers) {
            return
        }
        $.each(providers, function (i, provider) {
            let detail = set(provider)
            Provider.all.set('id', detail)
        })
        
        console.log(' Provider.all',  Provider.all);
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

Provider.init()
//end object
