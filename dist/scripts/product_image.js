    
const ProductImage = (function () {
    'use strict'
    
    const base_url = '/product_image'
    const _input_product_image_product_id = document.getElementById('input_product_image_product_id')
	const _input_product_image_image_id = document.getElementById('input_product_image_image_id')
	const _input_product_image_is_shown = document.getElementById('input_product_image_is_shown')
	const _input_product_image_is_cover = document.getElementById('input_product_image_is_cover')
	const _input_product_image_enabled = document.getElementById('input_product_image_enabled')
	const _input_product_image_date_created = document.getElementById('input_product_image_date_created')
	const _input_product_image_created_by = document.getElementById('input_product_image_created_by')
	const _input_product_image_date_modified = document.getElementById('input_product_image_date_modified')
	const _input_product_image_modified_by = document.getElementById('input_product_image_modified_by')
	const _input_product_image_note = document.getElementById('input_product_image_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_product_image_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            product_id: null,
			image_id: null,
			is_shown: 1,
			is_cover: 1,
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
        
    
    const set = function (product_image) {
        let detail = _default_detail()
        if (product_image) {
            detail.product_id = (product_image.product_id)?product_image.product_id:null
			detail.image_id = (product_image.image_id)?product_image.image_id:null
			detail.is_shown = (product_image.is_shown)?product_image.is_shown:1
			detail.is_cover = (product_image.is_cover)?product_image.is_cover:1
			detail.enabled = (product_image.enabled)?product_image.enabled:1
			detail.date_created = (product_image.date_created)?product_image.date_created:formatDateMySQL()
			detail.created_by = (product_image.created_by)?product_image.created_by:created_by
			detail.date_modified = (product_image.date_modified)?product_image.date_modified:formatDateMySQL()
			detail.modified_by = (product_image.modified_by)?product_image.modified_by:modified_by
			detail.note = (product_image.note)?product_image.note:null
        }
        
        ProductImage.detail = detail
        return detail
    }
    
    const load_all = function (product_images) {
        ProductImage.all = new Map()
    
        if (!product_images) {
            return
        }
        $.each(product_images, function (i, product_image) {
            let detail = set(product_image)
            ProductImage.all.set(detail)
        })
        
        console.log(' ProductImage.all',  ProductImage.all);
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

ProductImage.init()
//end object
