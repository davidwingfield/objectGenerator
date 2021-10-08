    
const Location = (function () {
    'use strict'
    
    const base_url = '/location'
    const _input_location_id = document.getElementById('input_location_id')
	const _input_location_city_id = document.getElementById('input_location_city_id')
	const _input_location_province_id = document.getElementById('input_location_province_id')
	const _input_location_country_id = document.getElementById('input_location_country_id')
	const _input_location_location_types_id = document.getElementById('input_location_location_types_id')
	const _input_location_name = document.getElementById('input_location_name')
	const _input_location_street = document.getElementById('input_location_street')
	const _input_location_street2 = document.getElementById('input_location_street2')
	const _input_location_zipcode = document.getElementById('input_location_zipcode')
	const _input_location_enabled = document.getElementById('input_location_enabled')
	const _input_location_date_created = document.getElementById('input_location_date_created')
	const _input_location_created_by = document.getElementById('input_location_created_by')
	const _input_location_date_modified = document.getElementById('input_location_date_modified')
	const _input_location_modified_by = document.getElementById('input_location_modified_by')
	const _input_location_note = document.getElementById('input_location_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_location_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			city_id: null,
			province_id: null,
			country_id: null,
			location_types_id: null,
			name: null,
			street: null,
			street2: null,
			zipcode: null,
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
            
    
    const set = function (location) {
        let detail = _default_detail()
        if (location) {
            detail.id = (location.id)?location.id:null
			detail.city_id = (location.city_id)?location.city_id:null
			detail.province_id = (location.province_id)?location.province_id:null
			detail.country_id = (location.country_id)?location.country_id:null
			detail.location_types_id = (location.location_types_id)?location.location_types_id:null
			detail.name = (location.name)?location.name:null
			detail.street = (location.street)?location.street:null
			detail.street2 = (location.street2)?location.street2:null
			detail.zipcode = (location.zipcode)?location.zipcode:null
			detail.enabled = (location.enabled)?location.enabled:1
			detail.date_created = (location.date_created)?location.date_created:formatDateMySQL()
			detail.created_by = (location.created_by)?location.created_by:created_by
			detail.date_modified = (location.date_modified)?location.date_modified:formatDateMySQL()
			detail.modified_by = (location.modified_by)?location.modified_by:modified_by
			detail.note = (location.note)?location.note:null
        }
        
        Location.detail = detail
        return detail
    }
    
    const load_all = function (locations) {
        Location.all = new Map()
    
        if (!locations) {
            return
        }
        $.each(locations, function (i, location) {
            let detail = set(location)
            Location.all.set('id', detail)
        })
        
        console.log(' Location.all',  Location.all);
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

Location.init()
//end object
