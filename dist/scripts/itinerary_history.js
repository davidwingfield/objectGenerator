    
const ItineraryHistory = (function () {
    'use strict'
    
    const base_url = '/itinerary_history'
    const _input_itinerary_history_id = document.getElementById('input_itinerary_history_id')
	const _input_itinerary_history_itinerary_id = document.getElementById('input_itinerary_history_itinerary_id')
	const _input_itinerary_history_json = document.getElementById('input_itinerary_history_json')
	const _input_itinerary_history_saved_by = document.getElementById('input_itinerary_history_saved_by')
	const _input_itinerary_history_comment = document.getElementById('input_itinerary_history_comment')
	const _input_itinerary_history_enabled = document.getElementById('input_itinerary_history_enabled')
	const _input_itinerary_history_date_created = document.getElementById('input_itinerary_history_date_created')
	const _input_itinerary_history_created_by = document.getElementById('input_itinerary_history_created_by')
	const _input_itinerary_history_date_modified = document.getElementById('input_itinerary_history_date_modified')
	const _input_itinerary_history_modified_by = document.getElementById('input_itinerary_history_modified_by')
	const _input_itinerary_history_note = document.getElementById('input_itinerary_history_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_itinerary_history_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			itinerary_id: null,
			json: null,
			saved_by: null,
			comment: null,
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
            
    
    const set = function (itinerary_history) {
        let detail = _default_detail()
        if (itinerary_history) {
            detail.id = (itinerary_history.id)?itinerary_history.id:null
			detail.itinerary_id = (itinerary_history.itinerary_id)?itinerary_history.itinerary_id:null
			detail.json = (itinerary_history.json)?itinerary_history.json:null
			detail.saved_by = (itinerary_history.saved_by)?itinerary_history.saved_by:null
			detail.comment = (itinerary_history.comment)?itinerary_history.comment:null
			detail.enabled = (itinerary_history.enabled)?itinerary_history.enabled:1
			detail.date_created = (itinerary_history.date_created)?itinerary_history.date_created:formatDateMySQL()
			detail.created_by = (itinerary_history.created_by)?itinerary_history.created_by:created_by
			detail.date_modified = (itinerary_history.date_modified)?itinerary_history.date_modified:formatDateMySQL()
			detail.modified_by = (itinerary_history.modified_by)?itinerary_history.modified_by:modified_by
			detail.note = (itinerary_history.note)?itinerary_history.note:null
        }
        
        ItineraryHistory.detail = detail
        return detail
    }
    
    const load_all = function (itinerary_histories) {
        ItineraryHistory.all = new Map()
    
        if (!itinerary_histories) {
            return
        }
        $.each(itinerary_histories, function (i, itinerary_history) {
            let detail = set(itinerary_history)
            ItineraryHistory.all.set('id', detail)
        })
        
        console.log(' ItineraryHistory.all',  ItineraryHistory.all);
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

ItineraryHistory.init()
//end object
