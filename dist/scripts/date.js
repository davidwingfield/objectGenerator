    
const Date = (function () {
    'use strict'
    
    const base_url = '/date'
    const _input_date_id = document.getElementById('input_date_id')
	const _input_date_formatted_date = document.getElementById('input_date_formatted_date')
	const _input_date_dow = document.getElementById('input_date_dow')
	const _input_date_enabled = document.getElementById('input_date_enabled')
	const _input_date_date_created = document.getElementById('input_date_date_created')
	const _input_date_created_by = document.getElementById('input_date_created_by')
	const _input_date_date_modified = document.getElementById('input_date_date_modified')
	const _input_date_modified_by = document.getElementById('input_date_modified_by')
	const _input_date_note = document.getElementById('input_date_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_date_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			formatted_date: null,
			dow: null,
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
            
    
    const set = function (date) {
        let detail = _default_detail()
        if (date) {
            detail.id = (date.id)?date.id:null
			detail.formatted_date = (date.formatted_date)?date.formatted_date:null
			detail.dow = (date.dow)?date.dow:null
			detail.enabled = (date.enabled)?date.enabled:1
			detail.date_created = (date.date_created)?date.date_created:formatDateMySQL()
			detail.created_by = (date.created_by)?date.created_by:created_by
			detail.date_modified = (date.date_modified)?date.date_modified:formatDateMySQL()
			detail.modified_by = (date.modified_by)?date.modified_by:modified_by
			detail.note = (date.note)?date.note:null
        }
        
        Date.detail = detail
        return detail
    }
    
    const load_all = function (dates) {
        Date.all = new Map()
    
        if (!dates) {
            return
        }
        $.each(dates, function (i, date) {
            let detail = set(date)
            Date.all.set('id', detail)
        })
        
        console.log(' Date.all',  Date.all);
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

Date.init()
//end object
