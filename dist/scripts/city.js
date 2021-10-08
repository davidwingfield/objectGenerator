    
const City = (function () {
    'use strict'
    
    const base_url = '/city'
    const _input_city_city_id = document.getElementById('input_city_city_id')
	const _input_city_city = document.getElementById('input_city_city')
	const _input_city_country_id = document.getElementById('input_city_country_id')
	const _input_city_last_update = document.getElementById('input_city_last_update')
	const _input_city_id = document.getElementById('input_city_id')
	const _input_city_province_id = document.getElementById('input_city_province_id')
	const _input_city_country_id = document.getElementById('input_city_country_id')
	const _input_city_sort_order = document.getElementById('input_city_sort_order')
	const _input_city_name = document.getElementById('input_city_name')
	const _input_city_enabled = document.getElementById('input_city_enabled')
	const _input_city_date_created = document.getElementById('input_city_date_created')
	const _input_city_created_by = document.getElementById('input_city_created_by')
	const _input_city_date_modified = document.getElementById('input_city_date_modified')
	const _input_city_modified_by = document.getElementById('input_city_modified_by')
	const _input_city_note = document.getElementById('input_city_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_city_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            city_id: null,
			city: null,
			country_id: null,
			last_update: null,
			id: null,
			province_id: null,
			country_id: null,
			sort_order: null,
			name: null,
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
        
    
    const set = function (city) {
        let detail = _default_detail()
        if (city) {
            detail.city_id = (city.city_id)?city.city_id:null
			detail.city = (city.city)?city.city:null
			detail.country_id = (city.country_id)?city.country_id:null
			detail.last_update = (city.last_update)?city.last_update:null
			detail.id = (city.id)?city.id:null
			detail.province_id = (city.province_id)?city.province_id:null
			detail.country_id = (city.country_id)?city.country_id:null
			detail.sort_order = (city.sort_order)?city.sort_order:null
			detail.name = (city.name)?city.name:null
			detail.enabled = (city.enabled)?city.enabled:1
			detail.date_created = (city.date_created)?city.date_created:formatDateMySQL()
			detail.created_by = (city.created_by)?city.created_by:created_by
			detail.date_modified = (city.date_modified)?city.date_modified:formatDateMySQL()
			detail.modified_by = (city.modified_by)?city.modified_by:modified_by
			detail.note = (city.note)?city.note:null
        }
        
        City.detail = detail
        return detail
    }
    
    const load_all = function (cities) {
        City.all = new Map()
    
        if (!cities) {
            return
        }
        $.each(cities, function (i, city) {
            let detail = set(city)
            City.all.set(detail)
        })
        
        console.log(' City.all',  City.all);
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

City.init()
//end object
