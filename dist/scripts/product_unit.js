    
const ProductUnit = (function () {
    'use strict'
    
    const base_url = '/product_unit'
    const _input_product_unit_product_id = document.getElementById('input_product_unit_product_id')
	const _input_product_unit_unit_id = document.getElementById('input_product_unit_unit_id')
	const _input_product_unit_min_pax = document.getElementById('input_product_unit_min_pax')
	const _input_product_unit_max_pax = document.getElementById('input_product_unit_max_pax')
	const _input_product_unit_min_nights = document.getElementById('input_product_unit_min_nights')
	const _input_product_unit_max_nights = document.getElementById('input_product_unit_max_nights')
	const _input_product_unit_description_long = document.getElementById('input_product_unit_description_long')
	const _input_product_unit_description_short = document.getElementById('input_product_unit_description_short')
	const _input_product_unit_blurb = document.getElementById('input_product_unit_blurb')
	const _input_product_unit_cover_image = document.getElementById('input_product_unit_cover_image')
	const _input_product_unit_meeting_point = document.getElementById('input_product_unit_meeting_point')
	const _input_product_unit_time_notes = document.getElementById('input_product_unit_time_notes')
	const _input_product_unit_start_time = document.getElementById('input_product_unit_start_time')
	const _input_product_unit_end_time = document.getElementById('input_product_unit_end_time')
	const _input_product_unit_enabled = document.getElementById('input_product_unit_enabled')
	const _input_product_unit_date_created = document.getElementById('input_product_unit_date_created')
	const _input_product_unit_created_by = document.getElementById('input_product_unit_created_by')
	const _input_product_unit_date_modified = document.getElementById('input_product_unit_date_modified')
	const _input_product_unit_modified_by = document.getElementById('input_product_unit_modified_by')
	const _input_product_unit_note = document.getElementById('input_product_unit_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_product_unit_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            product_id: null,
			unit_id: null,
			min_pax: null,
			max_pax: null,
			min_nights: null,
			max_nights: null,
			description_long: null,
			description_short: null,
			blurb: null,
			cover_image: null,
			meeting_point: null,
			time_notes: null,
			start_time: null,
			end_time: null,
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
        
    
    const set = function (product_unit) {
        let detail = _default_detail()
        if (product_unit) {
            detail.product_id = (product_unit.product_id)?product_unit.product_id:null
			detail.unit_id = (product_unit.unit_id)?product_unit.unit_id:null
			detail.min_pax = (product_unit.min_pax)?product_unit.min_pax:null
			detail.max_pax = (product_unit.max_pax)?product_unit.max_pax:null
			detail.min_nights = (product_unit.min_nights)?product_unit.min_nights:null
			detail.max_nights = (product_unit.max_nights)?product_unit.max_nights:null
			detail.description_long = (product_unit.description_long)?product_unit.description_long:null
			detail.description_short = (product_unit.description_short)?product_unit.description_short:null
			detail.blurb = (product_unit.blurb)?product_unit.blurb:null
			detail.cover_image = (product_unit.cover_image)?product_unit.cover_image:null
			detail.meeting_point = (product_unit.meeting_point)?product_unit.meeting_point:null
			detail.time_notes = (product_unit.time_notes)?product_unit.time_notes:null
			detail.start_time = (product_unit.start_time)?product_unit.start_time:null
			detail.end_time = (product_unit.end_time)?product_unit.end_time:null
			detail.enabled = (product_unit.enabled)?product_unit.enabled:1
			detail.date_created = (product_unit.date_created)?product_unit.date_created:formatDateMySQL()
			detail.created_by = (product_unit.created_by)?product_unit.created_by:created_by
			detail.date_modified = (product_unit.date_modified)?product_unit.date_modified:formatDateMySQL()
			detail.modified_by = (product_unit.modified_by)?product_unit.modified_by:modified_by
			detail.note = (product_unit.note)?product_unit.note:null
        }
        
        ProductUnit.detail = detail
        return detail
    }
    
    const load_all = function (product_units) {
        ProductUnit.all = new Map()
    
        if (!product_units) {
            return
        }
        $.each(product_units, function (i, product_unit) {
            let detail = set(product_unit)
            ProductUnit.all.set(detail)
        })
        
        console.log(' ProductUnit.all',  ProductUnit.all);
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

ProductUnit.init()
//end object
