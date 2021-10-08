    
const Variant = (function () {
    'use strict'
    
    const base_url = '/variant'
    const _input_variant_id = document.getElementById('input_variant_id')
	const _input_variant_category_id = document.getElementById('input_variant_category_id')
	const _input_variant_name = document.getElementById('input_variant_name')
	const _input_variant_min_age = document.getElementById('input_variant_min_age')
	const _input_variant_max_age = document.getElementById('input_variant_max_age')
	const _input_variant_enabled = document.getElementById('input_variant_enabled')
	const _input_variant_date_created = document.getElementById('input_variant_date_created')
	const _input_variant_created_by = document.getElementById('input_variant_created_by')
	const _input_variant_date_modified = document.getElementById('input_variant_date_modified')
	const _input_variant_modified_by = document.getElementById('input_variant_modified_by')
	const _input_variant_note = document.getElementById('input_variant_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_variant_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			category_id: null,
			name: null,
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
    
    
            const get = function(id){
                let data_to_send = {}
                if(id){
                    data_to_send.id = id
                }
                
            }  
            
    
    const set = function (variant) {
        let detail = _default_detail()
        if (variant) {
            detail.id = (variant.id)?variant.id:null
			detail.category_id = (variant.category_id)?variant.category_id:null
			detail.name = (variant.name)?variant.name:null
			detail.min_age = (variant.min_age)?variant.min_age:null
			detail.max_age = (variant.max_age)?variant.max_age:null
			detail.enabled = (variant.enabled)?variant.enabled:1
			detail.date_created = (variant.date_created)?variant.date_created:formatDateMySQL()
			detail.created_by = (variant.created_by)?variant.created_by:created_by
			detail.date_modified = (variant.date_modified)?variant.date_modified:formatDateMySQL()
			detail.modified_by = (variant.modified_by)?variant.modified_by:modified_by
			detail.note = (variant.note)?variant.note:null
        }
        
        Variant.detail = detail
        return detail
    }
    
    const load_all = function (variants) {
        Variant.all = new Map()
    
        if (!variants) {
            return
        }
        $.each(variants, function (i, variant) {
            let detail = set(variant)
            Variant.all.set('id', detail)
        })
        
        console.log(' Variant.all',  Variant.all);
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

Variant.init()
//end object
