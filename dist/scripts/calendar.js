    
const Calendar = (function () {
    'use strict'
    
    const base_url = '/calendar'
    const _input_calendar_id = document.getElementById('input_calendar_id')
	const _input_calendar_product_id = document.getElementById('input_calendar_product_id')
	const _input_calendar_enabled = document.getElementById('input_calendar_enabled')
	const _input_calendar_date_created = document.getElementById('input_calendar_date_created')
	const _input_calendar_created_by = document.getElementById('input_calendar_created_by')
	const _input_calendar_date_modified = document.getElementById('input_calendar_date_modified')
	const _input_calendar_modified_by = document.getElementById('input_calendar_modified_by')
	const _input_calendar_note = document.getElementById('input_calendar_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_calendar_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			product_id: null,
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
        
    
    const set = function (calendar) {
        let detail = _default_detail()
        if (calendar) {
            detail.id = (calendar.id)?calendar.id:null
			detail.product_id = (calendar.product_id)?calendar.product_id:null
			detail.enabled = (calendar.enabled)?calendar.enabled:1
			detail.date_created = (calendar.date_created)?calendar.date_created:formatDateMySQL()
			detail.created_by = (calendar.created_by)?calendar.created_by:created_by
			detail.date_modified = (calendar.date_modified)?calendar.date_modified:formatDateMySQL()
			detail.modified_by = (calendar.modified_by)?calendar.modified_by:modified_by
			detail.note = (calendar.note)?calendar.note:null
        }
        
        Calendar.detail = detail
        return detail
    }
    
    const load_all = function (calendars) {
        Calendar.all = new Map()
    
        if (!calendars) {
            return
        }
        $.each(calendars, function (i, calendar) {
            let detail = set(calendar)
            Calendar.all.set(detail)
        })
        
        console.log(' Calendar.all',  Calendar.all);
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

Calendar.init()
//end object
