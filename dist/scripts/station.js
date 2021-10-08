    
const Station = (function () {
    'use strict'
    
    const base_url = '/station'
    const _input_station_id = document.getElementById('input_station_id')
	const _input_station_name = document.getElementById('input_station_name')
	const _input_station_iata_code = document.getElementById('input_station_iata_code')
	const _input_station_city_id = document.getElementById('input_station_city_id')
	const _input_station_province_id = document.getElementById('input_station_province_id')
	const _input_station_country_id = document.getElementById('input_station_country_id')
	const _input_station_enabled = document.getElementById('input_station_enabled')
	const _input_station_date_created = document.getElementById('input_station_date_created')
	const _input_station_created_by = document.getElementById('input_station_created_by')
	const _input_station_date_modified = document.getElementById('input_station_date_modified')
	const _input_station_modified_by = document.getElementById('input_station_modified_by')
	const _input_station_note = document.getElementById('input_station_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_station_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			name: null,
			iata_code: null,
			city_id: null,
			province_id: null,
			country_id: null,
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
            
    
    const set = function (station) {
        let detail = _default_detail()
        if (station) {
            detail.id = (station.id)?station.id:null
			detail.name = (station.name)?station.name:null
			detail.iata_code = (station.iata_code)?station.iata_code:null
			detail.city_id = (station.city_id)?station.city_id:null
			detail.province_id = (station.province_id)?station.province_id:null
			detail.country_id = (station.country_id)?station.country_id:null
			detail.enabled = (station.enabled)?station.enabled:1
			detail.date_created = (station.date_created)?station.date_created:formatDateMySQL()
			detail.created_by = (station.created_by)?station.created_by:created_by
			detail.date_modified = (station.date_modified)?station.date_modified:formatDateMySQL()
			detail.modified_by = (station.modified_by)?station.modified_by:modified_by
			detail.note = (station.note)?station.note:null
        }
        
        Station.detail = detail
        return detail
    }
    
    const load_all = function (stations) {
        Station.all = new Map()
    
        if (!stations) {
            return
        }
        $.each(stations, function (i, station) {
            let detail = set(station)
            Station.all.set('id', detail)
        })
        
        console.log(' Station.all',  Station.all);
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

Station.init()
//end object
