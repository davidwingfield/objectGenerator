    
const CategoriesRatingsTypes = (function () {
    'use strict'
    
    const base_url = '/categories_ratings_types'
    const _input_categories_ratings_types_categories_id = document.getElementById('input_categories_ratings_types_categories_id')
	const _input_categories_ratings_types_rating_types_id = document.getElementById('input_categories_ratings_types_rating_types_id')
	const _input_categories_ratings_types_enabled = document.getElementById('input_categories_ratings_types_enabled')
	const _input_categories_ratings_types_date_created = document.getElementById('input_categories_ratings_types_date_created')
	const _input_categories_ratings_types_created_by = document.getElementById('input_categories_ratings_types_created_by')
	const _input_categories_ratings_types_date_modified = document.getElementById('input_categories_ratings_types_date_modified')
	const _input_categories_ratings_types_modified_by = document.getElementById('input_categories_ratings_types_modified_by')
	const _input_categories_ratings_types_note = document.getElementById('input_categories_ratings_types_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_categories_ratings_types_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            categories_id: null,
			rating_types_id: null,
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
        
    
    const set = function (categories_ratings_types) {
        let detail = _default_detail()
        if (categories_ratings_types) {
            detail.categories_id = (categories_ratings_types.categories_id)?categories_ratings_types.categories_id:null
			detail.rating_types_id = (categories_ratings_types.rating_types_id)?categories_ratings_types.rating_types_id:null
			detail.enabled = (categories_ratings_types.enabled)?categories_ratings_types.enabled:1
			detail.date_created = (categories_ratings_types.date_created)?categories_ratings_types.date_created:formatDateMySQL()
			detail.created_by = (categories_ratings_types.created_by)?categories_ratings_types.created_by:created_by
			detail.date_modified = (categories_ratings_types.date_modified)?categories_ratings_types.date_modified:formatDateMySQL()
			detail.modified_by = (categories_ratings_types.modified_by)?categories_ratings_types.modified_by:modified_by
			detail.note = (categories_ratings_types.note)?categories_ratings_types.note:null
        }
        
        CategoriesRatingsTypes.detail = detail
        return detail
    }
    
    const load_all = function (categories_ratings_types) {
        CategoriesRatingsTypes.all = new Map()
    
        if (!categories_ratings_types) {
            return
        }
        $.each(categories_ratings_types, function (i, categories_ratings_types) {
            let detail = set(categories_ratings_types)
            CategoriesRatingsTypes.all.set(detail)
        })
        
        console.log(' CategoriesRatingsTypes.all',  CategoriesRatingsTypes.all);
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

CategoriesRatingsTypes.init()
//end object
