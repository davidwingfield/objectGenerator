    
const Company = (function () {
    'use strict'
    
    const base_url = '/company'
    const _input_company_id = document.getElementById('input_company_id')
	const _input_company_name = document.getElementById('input_company_name')
	const _input_company_phone_1 = document.getElementById('input_company_phone_1')
	const _input_company_phone_2 = document.getElementById('input_company_phone_2')
	const _input_company_fax = document.getElementById('input_company_fax')
	const _input_company_website = document.getElementById('input_company_website')
	const _input_company_email = document.getElementById('input_company_email')
	const _input_company_status = document.getElementById('input_company_status')
	const _input_company_enabled = document.getElementById('input_company_enabled')
	const _input_company_date_created = document.getElementById('input_company_date_created')
	const _input_company_created_by = document.getElementById('input_company_created_by')
	const _input_company_date_modified = document.getElementById('input_company_date_modified')
	const _input_company_modified_by = document.getElementById('input_company_modified_by')
	const _input_company_note = document.getElementById('input_company_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_company_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			name: null,
			phone_1: null,
			phone_2: null,
			fax: null,
			website: null,
			email: null,
			status: null,
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
            
    
    const set = function (company) {
        let detail = _default_detail()
        if (company) {
            detail.id = (company.id)?company.id:null
			detail.name = (company.name)?company.name:null
			detail.phone_1 = (company.phone_1)?company.phone_1:null
			detail.phone_2 = (company.phone_2)?company.phone_2:null
			detail.fax = (company.fax)?company.fax:null
			detail.website = (company.website)?company.website:null
			detail.email = (company.email)?company.email:null
			detail.status = (company.status)?company.status:null
			detail.enabled = (company.enabled)?company.enabled:1
			detail.date_created = (company.date_created)?company.date_created:formatDateMySQL()
			detail.created_by = (company.created_by)?company.created_by:created_by
			detail.date_modified = (company.date_modified)?company.date_modified:formatDateMySQL()
			detail.modified_by = (company.modified_by)?company.modified_by:modified_by
			detail.note = (company.note)?company.note:null
        }
        
        Company.detail = detail
        return detail
    }
    
    const load_all = function (companies) {
        Company.all = new Map()
    
        if (!companies) {
            return
        }
        $.each(companies, function (i, company) {
            let detail = set(company)
            Company.all.set('id', detail)
        })
        
        console.log(' Company.all',  Company.all);
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

Company.init()
//end object
