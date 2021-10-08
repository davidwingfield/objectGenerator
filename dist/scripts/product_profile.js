    
const ProductProfile = (function () {
    'use strict'
    
    const base_url = '/product_profile'
    const _input_product_profile_product_id = document.getElementById('input_product_profile_product_id')
	const _input_product_profile_profile_id = document.getElementById('input_product_profile_profile_id')
	const _input_product_profile_enabled = document.getElementById('input_product_profile_enabled')
	const _input_product_profile_date_created = document.getElementById('input_product_profile_date_created')
	const _input_product_profile_created_by = document.getElementById('input_product_profile_created_by')
	const _input_product_profile_date_modified = document.getElementById('input_product_profile_date_modified')
	const _input_product_profile_modified_by = document.getElementById('input_product_profile_modified_by')
	const _input_product_profile_note = document.getElementById('input_product_profile_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_product_profile_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            product_id: null,
			profile_id: null,
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
        
    
    const set = function (product_profile) {
        let detail = _default_detail()
        if (product_profile) {
            detail.product_id = (product_profile.product_id)?product_profile.product_id:null
			detail.profile_id = (product_profile.profile_id)?product_profile.profile_id:null
			detail.enabled = (product_profile.enabled)?product_profile.enabled:1
			detail.date_created = (product_profile.date_created)?product_profile.date_created:formatDateMySQL()
			detail.created_by = (product_profile.created_by)?product_profile.created_by:created_by
			detail.date_modified = (product_profile.date_modified)?product_profile.date_modified:formatDateMySQL()
			detail.modified_by = (product_profile.modified_by)?product_profile.modified_by:modified_by
			detail.note = (product_profile.note)?product_profile.note:null
        }
        
        ProductProfile.detail = detail
        return detail
    }
    
    const load_all = function (product_profiles) {
        ProductProfile.all = new Map()
    
        if (!product_profiles) {
            return
        }
        $.each(product_profiles, function (i, product_profile) {
            let detail = set(product_profile)
            ProductProfile.all.set(detail)
        })
        
        console.log(' ProductProfile.all',  ProductProfile.all);
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

ProductProfile.init()
//end object
