    
const Contact = (function () {
    'use strict'
    
    const base_url = '/contact'
    const _input_contact_id = document.getElementById('input_contact_id')
	const _input_contact_name_first = document.getElementById('input_contact_name_first')
	const _input_contact_name_last = document.getElementById('input_contact_name_last')
	const _input_contact_phone = document.getElementById('input_contact_phone')
	const _input_contact_email = document.getElementById('input_contact_email')
	const _input_contact_enabled = document.getElementById('input_contact_enabled')
	const _input_contact_date_created = document.getElementById('input_contact_date_created')
	const _input_contact_created_by = document.getElementById('input_contact_created_by')
	const _input_contact_date_modified = document.getElementById('input_contact_date_modified')
	const _input_contact_modified_by = document.getElementById('input_contact_modified_by')
	const _input_contact_note = document.getElementById('input_contact_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_contact_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			name_first: null,
			name_last: null,
			phone: null,
			email: null,
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
            
    
    const set = function (contact) {
        let detail = _default_detail()
        if (contact) {
            detail.id = (contact.id)?contact.id:null
			detail.name_first = (contact.name_first)?contact.name_first:null
			detail.name_last = (contact.name_last)?contact.name_last:null
			detail.phone = (contact.phone)?contact.phone:null
			detail.email = (contact.email)?contact.email:null
			detail.enabled = (contact.enabled)?contact.enabled:1
			detail.date_created = (contact.date_created)?contact.date_created:formatDateMySQL()
			detail.created_by = (contact.created_by)?contact.created_by:created_by
			detail.date_modified = (contact.date_modified)?contact.date_modified:formatDateMySQL()
			detail.modified_by = (contact.modified_by)?contact.modified_by:modified_by
			detail.note = (contact.note)?contact.note:null
        }
        
        Contact.detail = detail
        return detail
    }
    
    const load_all = function (contacts) {
        Contact.all = new Map()
    
        if (!contacts) {
            return
        }
        $.each(contacts, function (i, contact) {
            let detail = set(contact)
            Contact.all.set('id', detail)
        })
        
        console.log(' Contact.all',  Contact.all);
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

Contact.init()
//end object
