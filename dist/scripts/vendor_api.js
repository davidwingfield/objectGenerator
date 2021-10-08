    
const VendorApi = (function () {
    'use strict'
    
    const base_url = '/vendor_api'
    const _input_vendor_api_vendor_id = document.getElementById('input_vendor_api_vendor_id')
	const _input_vendor_api_api_id = document.getElementById('input_vendor_api_api_id')
	const _input_vendor_api_enabled = document.getElementById('input_vendor_api_enabled')
	const _input_vendor_api_date_created = document.getElementById('input_vendor_api_date_created')
	const _input_vendor_api_created_by = document.getElementById('input_vendor_api_created_by')
	const _input_vendor_api_date_modified = document.getElementById('input_vendor_api_date_modified')
	const _input_vendor_api_modified_by = document.getElementById('input_vendor_api_modified_by')
	const _input_vendor_api_note = document.getElementById('input_vendor_api_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_vendor_api_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            vendor_id: null,
			api_id: null,
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
        
    
    const set = function (vendor_api) {
        let detail = _default_detail()
        if (vendor_api) {
            detail.vendor_id = (vendor_api.vendor_id)?vendor_api.vendor_id:null
			detail.api_id = (vendor_api.api_id)?vendor_api.api_id:null
			detail.enabled = (vendor_api.enabled)?vendor_api.enabled:1
			detail.date_created = (vendor_api.date_created)?vendor_api.date_created:formatDateMySQL()
			detail.created_by = (vendor_api.created_by)?vendor_api.created_by:created_by
			detail.date_modified = (vendor_api.date_modified)?vendor_api.date_modified:formatDateMySQL()
			detail.modified_by = (vendor_api.modified_by)?vendor_api.modified_by:modified_by
			detail.note = (vendor_api.note)?vendor_api.note:null
        }
        
        VendorApi.detail = detail
        return detail
    }
    
    const load_all = function (vendor_apis) {
        VendorApi.all = new Map()
    
        if (!vendor_apis) {
            return
        }
        $.each(vendor_apis, function (i, vendor_api) {
            let detail = set(vendor_api)
            VendorApi.all.set(detail)
        })
        
        console.log(' VendorApi.all',  VendorApi.all);
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

VendorApi.init()
//end object
