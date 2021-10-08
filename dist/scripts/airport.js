    
const Airport = (function () {
    'use strict'
    
    const base_url = '/airport'
    const _input_airport_id = document.getElementById('input_airport_id')
	const _input_airport_airport_types_id = document.getElementById('input_airport_airport_types_id')
	const _input_airport_city_id = document.getElementById('input_airport_city_id')
	const _input_airport_province_id = document.getElementById('input_airport_province_id')
	const _input_airport_country_id = document.getElementById('input_airport_country_id')
	const _input_airport_name = document.getElementById('input_airport_name')
	const _input_airport_iata_code = document.getElementById('input_airport_iata_code')
	const _input_airport_gps_code = document.getElementById('input_airport_gps_code')
	const _input_airport_local_code = document.getElementById('input_airport_local_code')
	const _input_airport_home_link = document.getElementById('input_airport_home_link')
	const _input_airport_wikipedia_link = document.getElementById('input_airport_wikipedia_link')
	const _input_airport_scheduled_service = document.getElementById('input_airport_scheduled_service')
	const _input_airport_keywords = document.getElementById('input_airport_keywords')
	const _input_airport_enabled = document.getElementById('input_airport_enabled')
	const _input_airport_date_created = document.getElementById('input_airport_date_created')
	const _input_airport_created_by = document.getElementById('input_airport_created_by')
	const _input_airport_date_modified = document.getElementById('input_airport_date_modified')
	const _input_airport_modified_by = document.getElementById('input_airport_modified_by')
	const _input_airport_note = document.getElementById('input_airport_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_airport_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			airport_types_id: null,
			city_id: null,
			province_id: null,
			country_id: null,
			name: null,
			iata_code: null,
			gps_code: null,
			local_code: null,
			home_link: null,
			wikipedia_link: null,
			scheduled_service: 1,
			keywords: null,
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
            
    
    const set = function (airport) {
        let detail = _default_detail()
        if (airport) {
            detail.id = (airport.id)?airport.id:null
			detail.airport_types_id = (airport.airport_types_id)?airport.airport_types_id:null
			detail.city_id = (airport.city_id)?airport.city_id:null
			detail.province_id = (airport.province_id)?airport.province_id:null
			detail.country_id = (airport.country_id)?airport.country_id:null
			detail.name = (airport.name)?airport.name:null
			detail.iata_code = (airport.iata_code)?airport.iata_code:null
			detail.gps_code = (airport.gps_code)?airport.gps_code:null
			detail.local_code = (airport.local_code)?airport.local_code:null
			detail.home_link = (airport.home_link)?airport.home_link:null
			detail.wikipedia_link = (airport.wikipedia_link)?airport.wikipedia_link:null
			detail.scheduled_service = (airport.scheduled_service)?airport.scheduled_service:1
			detail.keywords = (airport.keywords)?airport.keywords:null
			detail.enabled = (airport.enabled)?airport.enabled:1
			detail.date_created = (airport.date_created)?airport.date_created:formatDateMySQL()
			detail.created_by = (airport.created_by)?airport.created_by:created_by
			detail.date_modified = (airport.date_modified)?airport.date_modified:formatDateMySQL()
			detail.modified_by = (airport.modified_by)?airport.modified_by:modified_by
			detail.note = (airport.note)?airport.note:null
        }
        
        Airport.detail = detail
        return detail
    }
    
    const load_all = function (airports) {
        Airport.all = new Map()
    
        if (!airports) {
            return
        }
        $.each(airports, function (i, airport) {
            let detail = set(airport)
            Airport.all.set('id', detail)
        })
        
        console.log(' Airport.all',  Airport.all);
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

Airport.init()
//end object
