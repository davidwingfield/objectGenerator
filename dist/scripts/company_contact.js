    
const CompanyContact = (function () {
    'use strict'
    
    const base_url = '/company_contact'
    const _input_company_contact_company_id = document.getElementById('input_company_contact_company_id')
	const _input_company_contact_contact_id = document.getElementById('input_company_contact_contact_id')
	const _input_company_contact_contact_types_id = document.getElementById('input_company_contact_contact_types_id')
	const _input_company_contact_enabled = document.getElementById('input_company_contact_enabled')
	const _input_company_contact_date_created = document.getElementById('input_company_contact_date_created')
	const _input_company_contact_created_by = document.getElementById('input_company_contact_created_by')
	const _input_company_contact_date_modified = document.getElementById('input_company_contact_date_modified')
	const _input_company_contact_modified_by = document.getElementById('input_company_contact_modified_by')
	const _input_company_contact_note = document.getElementById('input_company_contact_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_company_contact_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            company_id: null,
			contact_id: null,
			contact_types_id: null,
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
        
    
    const set = function (company_contact) {
        let detail = _default_detail()
        if (company_contact) {
            detail.company_id = (company_contact.company_id)?company_contact.company_id:null
			detail.contact_id = (company_contact.contact_id)?company_contact.contact_id:null
			detail.contact_types_id = (company_contact.contact_types_id)?company_contact.contact_types_id:null
			detail.enabled = (company_contact.enabled)?company_contact.enabled:1
			detail.date_created = (company_contact.date_created)?company_contact.date_created:formatDateMySQL()
			detail.created_by = (company_contact.created_by)?company_contact.created_by:created_by
			detail.date_modified = (company_contact.date_modified)?company_contact.date_modified:formatDateMySQL()
			detail.modified_by = (company_contact.modified_by)?company_contact.modified_by:modified_by
			detail.note = (company_contact.note)?company_contact.note:null
        }
        
        CompanyContact.detail = detail
        return detail
    }
    
    const load_all = function (company_contacts) {
        CompanyContact.all = new Map()
    
        if (!company_contacts) {
            return
        }
        $.each(company_contacts, function (i, company_contact) {
            let detail = set(company_contact)
            CompanyContact.all.set(detail)
        })
        
        console.log(' CompanyContact.all',  CompanyContact.all);
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

CompanyContact.init()
//end object
