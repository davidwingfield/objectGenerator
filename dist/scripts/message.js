    
const Message = (function () {
    'use strict'
    
    const base_url = '/message'
    const _input_message_id = document.getElementById('input_message_id')
	const _input_message_subject = document.getElementById('input_message_subject')
	const _input_message_body = document.getElementById('input_message_body')
	const _input_message_been_read = document.getElementById('input_message_been_read')
	const _input_message_priority = document.getElementById('input_message_priority')
	const _input_message_to_user_id = document.getElementById('input_message_to_user_id')
	const _input_message_from_user_id = document.getElementById('input_message_from_user_id')
	const _input_message_enabled = document.getElementById('input_message_enabled')
	const _input_message_date_created = document.getElementById('input_message_date_created')
	const _input_message_created_by = document.getElementById('input_message_created_by')
	const _input_message_date_modified = document.getElementById('input_message_date_modified')
	const _input_message_modified_by = document.getElementById('input_message_modified_by')
	const _input_message_note = document.getElementById('input_message_note')
	const _input_message_date_read = document.getElementById('input_message_date_read')
	const _input_message_message_type_id = document.getElementById('input_message_message_type_id')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_message_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			subject: null,
			body: null,
			been_read: 1,
			priority: 1,
			to_user_id: null,
			from_user_id: null,
			enabled: 1,
			date_created: formatDateMySQL(),
			created_by: user_id,
			date_modified: formatDateMySQL(),
			modified_by: user_id,
			note: null,
			date_read: formatDateMySQL(),
			message_type_id: null
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
            
    
    const set = function (message) {
        let detail = _default_detail()
        if (message) {
            detail.id = (message.id)?message.id:null
			detail.subject = (message.subject)?message.subject:null
			detail.body = (message.body)?message.body:null
			detail.been_read = (message.been_read)?message.been_read:1
			detail.priority = (message.priority)?message.priority:1
			detail.to_user_id = (message.to_user_id)?message.to_user_id:null
			detail.from_user_id = (message.from_user_id)?message.from_user_id:null
			detail.enabled = (message.enabled)?message.enabled:1
			detail.date_created = (message.date_created)?message.date_created:formatDateMySQL()
			detail.created_by = (message.created_by)?message.created_by:created_by
			detail.date_modified = (message.date_modified)?message.date_modified:formatDateMySQL()
			detail.modified_by = (message.modified_by)?message.modified_by:modified_by
			detail.note = (message.note)?message.note:null
			detail.date_read = (message.date_read)?message.date_read:formatDateMySQL()
			detail.message_type_id = (message.message_type_id)?message.message_type_id:null
        }
        
        Message.detail = detail
        return detail
    }
    
    const load_all = function (messages) {
        Message.all = new Map()
    
        if (!messages) {
            return
        }
        $.each(messages, function (i, message) {
            let detail = set(message)
            Message.all.set('id', detail)
        })
        
        console.log(' Message.all',  Message.all);
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

Message.init()
//end object
