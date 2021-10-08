    
const LocationProduct = (function () {
    'use strict'
    
    const base_url = '/location_product'
    const _input_location_product_product_id = document.getElementById('input_location_product_product_id')
	const _input_location_product_location_id = document.getElementById('input_location_product_location_id')
	const _input_location_product_enabled = document.getElementById('input_location_product_enabled')
	const _input_location_product_date_created = document.getElementById('input_location_product_date_created')
	const _input_location_product_created_by = document.getElementById('input_location_product_created_by')
	const _input_location_product_date_modified = document.getElementById('input_location_product_date_modified')
	const _input_location_product_modified_by = document.getElementById('input_location_product_modified_by')
	const _input_location_product_note = document.getElementById('input_location_product_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_location_product_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            product_id: null,
			location_id: null,
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
        
    
    const set = function (location_product) {
        let detail = _default_detail()
        if (location_product) {
            detail.product_id = (location_product.product_id)?location_product.product_id:null
			detail.location_id = (location_product.location_id)?location_product.location_id:null
			detail.enabled = (location_product.enabled)?location_product.enabled:1
			detail.date_created = (location_product.date_created)?location_product.date_created:formatDateMySQL()
			detail.created_by = (location_product.created_by)?location_product.created_by:created_by
			detail.date_modified = (location_product.date_modified)?location_product.date_modified:formatDateMySQL()
			detail.modified_by = (location_product.modified_by)?location_product.modified_by:modified_by
			detail.note = (location_product.note)?location_product.note:null
        }
        
        LocationProduct.detail = detail
        return detail
    }
    
    const load_all = function (location_products) {
        LocationProduct.all = new Map()
    
        if (!location_products) {
            return
        }
        $.each(location_products, function (i, location_product) {
            let detail = set(location_product)
            LocationProduct.all.set(detail)
        })
        
        console.log(' LocationProduct.all',  LocationProduct.all);
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

LocationProduct.init()
//end object
