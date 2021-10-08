    
const ProductVariant = (function () {
    'use strict'
    
    const base_url = '/product_variant'
    const _input_product_variant_product_id = document.getElementById('input_product_variant_product_id')
	const _input_product_variant_variant_id = document.getElementById('input_product_variant_variant_id')
	const _input_product_variant_min_age = document.getElementById('input_product_variant_min_age')
	const _input_product_variant_max_age = document.getElementById('input_product_variant_max_age')
	const _input_product_variant_enabled = document.getElementById('input_product_variant_enabled')
	const _input_product_variant_date_created = document.getElementById('input_product_variant_date_created')
	const _input_product_variant_created_by = document.getElementById('input_product_variant_created_by')
	const _input_product_variant_date_modified = document.getElementById('input_product_variant_date_modified')
	const _input_product_variant_modified_by = document.getElementById('input_product_variant_modified_by')
	const _input_product_variant_note = document.getElementById('input_product_variant_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_product_variant_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            product_id: null,
			variant_id: null,
			min_age: null,
			max_age: null,
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
        
    
    const set = function (product_variant) {
        let detail = _default_detail()
        if (product_variant) {
            detail.product_id = (product_variant.product_id)?product_variant.product_id:null
			detail.variant_id = (product_variant.variant_id)?product_variant.variant_id:null
			detail.min_age = (product_variant.min_age)?product_variant.min_age:null
			detail.max_age = (product_variant.max_age)?product_variant.max_age:null
			detail.enabled = (product_variant.enabled)?product_variant.enabled:1
			detail.date_created = (product_variant.date_created)?product_variant.date_created:formatDateMySQL()
			detail.created_by = (product_variant.created_by)?product_variant.created_by:created_by
			detail.date_modified = (product_variant.date_modified)?product_variant.date_modified:formatDateMySQL()
			detail.modified_by = (product_variant.modified_by)?product_variant.modified_by:modified_by
			detail.note = (product_variant.note)?product_variant.note:null
        }
        
        ProductVariant.detail = detail
        return detail
    }
    
    const load_all = function (product_variants) {
        ProductVariant.all = new Map()
    
        if (!product_variants) {
            return
        }
        $.each(product_variants, function (i, product_variant) {
            let detail = set(product_variant)
            ProductVariant.all.set(detail)
        })
        
        console.log(' ProductVariant.all',  ProductVariant.all);
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

ProductVariant.init()
//end object
