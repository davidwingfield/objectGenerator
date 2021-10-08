    
const CalendarDate = (function () {
    'use strict'
    
    const base_url = '/calendar_date'
    const _input_calendar_date_calendar_id = document.getElementById('input_calendar_date_calendar_id')
	const _input_calendar_date_date_id = document.getElementById('input_calendar_date_date_id')
	const _input_calendar_date_season_id = document.getElementById('input_calendar_date_season_id')
	const _input_calendar_date_enabled = document.getElementById('input_calendar_date_enabled')
	const _input_calendar_date_date_created = document.getElementById('input_calendar_date_date_created')
	const _input_calendar_date_created_by = document.getElementById('input_calendar_date_created_by')
	const _input_calendar_date_date_modified = document.getElementById('input_calendar_date_date_modified')
	const _input_calendar_date_modified_by = document.getElementById('input_calendar_date_modified_by')
	const _input_calendar_date_note = document.getElementById('input_calendar_date_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_calendar_date_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            calendar_id: null,
			date_id: null,
			season_id: null,
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
        
    
    const set = function (calendar_date) {
        let detail = _default_detail()
        if (calendar_date) {
            detail.calendar_id = (calendar_date.calendar_id)?calendar_date.calendar_id:null
			detail.date_id = (calendar_date.date_id)?calendar_date.date_id:null
			detail.season_id = (calendar_date.season_id)?calendar_date.season_id:null
			detail.enabled = (calendar_date.enabled)?calendar_date.enabled:1
			detail.date_created = (calendar_date.date_created)?calendar_date.date_created:formatDateMySQL()
			detail.created_by = (calendar_date.created_by)?calendar_date.created_by:created_by
			detail.date_modified = (calendar_date.date_modified)?calendar_date.date_modified:formatDateMySQL()
			detail.modified_by = (calendar_date.modified_by)?calendar_date.modified_by:modified_by
			detail.note = (calendar_date.note)?calendar_date.note:null
        }
        
        CalendarDate.detail = detail
        return detail
    }
    
    const load_all = function (calendar_dates) {
        CalendarDate.all = new Map()
    
        if (!calendar_dates) {
            return
        }
        $.each(calendar_dates, function (i, calendar_date) {
            let detail = set(calendar_date)
            CalendarDate.all.set(detail)
        })
        
        console.log(' CalendarDate.all',  CalendarDate.all);
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

CalendarDate.init()
//end object
