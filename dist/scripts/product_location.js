    
const ProductLocation = (function () {
    'use strict'
    
    const base_url = '/product_location'
    const _input_product_location_product_id = document.getElementById('input_product_location_product_id')
	const _input_product_location_location_id = document.getElementById('input_product_location_location_id')
	const _input_product_location_location_types_id = document.getElementById('input_product_location_location_types_id')
	const _input_product_location_description_long = document.getElementById('input_product_location_description_long')
	const _input_product_location_description_short = document.getElementById('input_product_location_description_short')
	const _input_product_location_arrival_time = document.getElementById('input_product_location_arrival_time')
	const _input_product_location_departure_time = document.getElementById('input_product_location_departure_time')
	const _input_product_location_city_id = document.getElementById('input_product_location_city_id')
	const _input_product_location_province_id = document.getElementById('input_product_location_province_id')
	const _input_product_location_country_id = document.getElementById('input_product_location_country_id')
	const _input_product_location_enabled = document.getElementById('input_product_location_enabled')
	const _input_product_location_date_created = document.getElementById('input_product_location_date_created')
	const _input_product_location_created_by = document.getElementById('input_product_location_created_by')
	const _input_product_location_date_modified = document.getElementById('input_product_location_date_modified')
	const _input_product_location_modified_by = document.getElementById('input_product_location_modified_by')
	const _input_product_location_note = document.getElementById('input_product_location_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_product_location_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            product_id: null,
			location_id: null,
			location_types_id: null,
			description_long: null,
			description_short: null,
			arrival_time: null,
			departure_time: null,
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
    
    
        const get = function(){
            let data_to_send = {}
            
        }  
        
    
    const set = function (product_location) {
        let detail = _default_detail()
        if (product_location) {
            detail.product_id = (product_location.product_id)?product_location.product_id:null
			detail.location_id = (product_location.location_id)?product_location.location_id:null
			detail.location_types_id = (product_location.location_types_id)?product_location.location_types_id:null
			detail.description_long = (product_location.description_long)?product_location.description_long:null
			detail.description_short = (product_location.description_short)?product_location.description_short:null
			detail.arrival_time = (product_location.arrival_time)?product_location.arrival_time:null
			detail.departure_time = (product_location.departure_time)?product_location.departure_time:null
			detail.city_id = (product_location.city_id)?product_location.city_id:null
			detail.province_id = (product_location.province_id)?product_location.province_id:null
			detail.country_id = (product_location.country_id)?product_location.country_id:null
			detail.enabled = (product_location.enabled)?product_location.enabled:1
			detail.date_created = (product_location.date_created)?product_location.date_created:formatDateMySQL()
			detail.created_by = (product_location.created_by)?product_location.created_by:created_by
			detail.date_modified = (product_location.date_modified)?product_location.date_modified:formatDateMySQL()
			detail.modified_by = (product_location.modified_by)?product_location.modified_by:modified_by
			detail.note = (product_location.note)?product_location.note:null
        }
        
        ProductLocation.detail = detail
        return detail
    }
    
    const load_all = function (product_locations) {
        ProductLocation.all = new Map()
    
        if (!product_locations) {
            return
        }
        $.each(product_locations, function (i, product_location) {
            let detail = set(product_location)
            ProductLocation.all.set(detail)
        })
        
        console.log(' ProductLocation.all',  ProductLocation.all);
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

ProductLocation.init()
//end object
