    
const Itinerary = (function () {
    'use strict'
    
    const base_url = '/itinerary'
    const _input_itinerary_id = document.getElementById('input_itinerary_id')
	const _input_itinerary_customer_id = document.getElementById('input_itinerary_customer_id')
	const _input_itinerary_stage_id = document.getElementById('input_itinerary_stage_id')
	const _input_itinerary_traveler_id = document.getElementById('input_itinerary_traveler_id')
	const _input_itinerary_name = document.getElementById('input_itinerary_name')
	const _input_itinerary_start_date = document.getElementById('input_itinerary_start_date')
	const _input_itinerary_end_date = document.getElementById('input_itinerary_end_date')
	const _input_itinerary_currency_id = document.getElementById('input_itinerary_currency_id')
	const _input_itinerary_json = document.getElementById('input_itinerary_json')
	const _input_itinerary_enabled = document.getElementById('input_itinerary_enabled')
	const _input_itinerary_date_created = document.getElementById('input_itinerary_date_created')
	const _input_itinerary_created_by = document.getElementById('input_itinerary_created_by')
	const _input_itinerary_date_modified = document.getElementById('input_itinerary_date_modified')
	const _input_itinerary_modified_by = document.getElementById('input_itinerary_modified_by')
	const _input_itinerary_note = document.getElementById('input_itinerary_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_itinerary_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			customer_id: null,
			stage_id: null,
			traveler_id: null,
			name: null,
			start_date: null,
			end_date: null,
			currency_id: null,
			json: null,
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
            
    
    const set = function (itinerary) {
        let detail = _default_detail()
        if (itinerary) {
            detail.id = (itinerary.id)?itinerary.id:null
			detail.customer_id = (itinerary.customer_id)?itinerary.customer_id:null
			detail.stage_id = (itinerary.stage_id)?itinerary.stage_id:null
			detail.traveler_id = (itinerary.traveler_id)?itinerary.traveler_id:null
			detail.name = (itinerary.name)?itinerary.name:null
			detail.start_date = (itinerary.start_date)?itinerary.start_date:null
			detail.end_date = (itinerary.end_date)?itinerary.end_date:null
			detail.currency_id = (itinerary.currency_id)?itinerary.currency_id:null
			detail.json = (itinerary.json)?itinerary.json:null
			detail.enabled = (itinerary.enabled)?itinerary.enabled:1
			detail.date_created = (itinerary.date_created)?itinerary.date_created:formatDateMySQL()
			detail.created_by = (itinerary.created_by)?itinerary.created_by:created_by
			detail.date_modified = (itinerary.date_modified)?itinerary.date_modified:formatDateMySQL()
			detail.modified_by = (itinerary.modified_by)?itinerary.modified_by:modified_by
			detail.note = (itinerary.note)?itinerary.note:null
        }
        
        Itinerary.detail = detail
        return detail
    }
    
    const load_all = function (itineraries) {
        Itinerary.all = new Map()
    
        if (!itineraries) {
            return
        }
        $.each(itineraries, function (i, itinerary) {
            let detail = set(itinerary)
            Itinerary.all.set('id', detail)
        })
        
        console.log(' Itinerary.all',  Itinerary.all);
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

Itinerary.init()
//end object
