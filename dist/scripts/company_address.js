    
const CompanyAddress = (function () {
    'use strict'
    
    const base_url = '/company_address'
    const _input_company_address_company_id = document.getElementById('input_company_address_company_id')
	const _input_company_address_address_id = document.getElementById('input_company_address_address_id')
	const _input_company_address_address_types_id = document.getElementById('input_company_address_address_types_id')
	const _input_company_address_enabled = document.getElementById('input_company_address_enabled')
	const _input_company_address_date_created = document.getElementById('input_company_address_date_created')
	const _input_company_address_created_by = document.getElementById('input_company_address_created_by')
	const _input_company_address_date_modified = document.getElementById('input_company_address_date_modified')
	const _input_company_address_modified_by = document.getElementById('input_company_address_modified_by')
	const _input_company_address_note = document.getElementById('input_company_address_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_company_address_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            company_id: null,
			address_id: null,
			address_types_id: null,
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
        
    
    const set = function (company_address) {
        let detail = _default_detail()
        if (company_address) {
            detail.company_id = (company_address.company_id)?company_address.company_id:null
			detail.address_id = (company_address.address_id)?company_address.address_id:null
			detail.address_types_id = (company_address.address_types_id)?company_address.address_types_id:null
			detail.enabled = (company_address.enabled)?company_address.enabled:1
			detail.date_created = (company_address.date_created)?company_address.date_created:formatDateMySQL()
			detail.created_by = (company_address.created_by)?company_address.created_by:created_by
			detail.date_modified = (company_address.date_modified)?company_address.date_modified:formatDateMySQL()
			detail.modified_by = (company_address.modified_by)?company_address.modified_by:modified_by
			detail.note = (company_address.note)?company_address.note:null
        }
        
        CompanyAddress.detail = detail
        return detail
    }
    
    const load_all = function (company_addresses) {
        CompanyAddress.all = new Map()
    
        if (!company_addresses) {
            return
        }
        $.each(company_addresses, function (i, company_address) {
            let detail = set(company_address)
            CompanyAddress.all.set(detail)
        })
        
        console.log(' CompanyAddress.all',  CompanyAddress.all);
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

CompanyAddress.init()
//end object
