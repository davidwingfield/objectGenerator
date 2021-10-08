    
const LocationCategory = (function () {
    'use strict'
    
    const base_url = '/location_category'
    const _input_location_category_location_id = document.getElementById('input_location_category_location_id')
	const _input_location_category__location_types_id = document.getElementById('input_location_category__location_types_id')
	const _input_location_category_category_id = document.getElementById('input_location_category_category_id')
	const _input_location_category_enabled = document.getElementById('input_location_category_enabled')
	const _input_location_category_date_created = document.getElementById('input_location_category_date_created')
	const _input_location_category_created_by = document.getElementById('input_location_category_created_by')
	const _input_location_category_date_modified = document.getElementById('input_location_category_date_modified')
	const _input_location_category_modified_by = document.getElementById('input_location_category_modified_by')
	const _input_location_category_note = document.getElementById('input_location_category_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_location_category_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            location_id: null,
			_location_types_id: null,
			category_id: null,
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
    
    
            const get = function(location_id){
                let data_to_send = {}
                if(location_id){
                    data_to_send.location_id = location_id
                }
                
            }  
            
    
    const set = function (location_category) {
        let detail = _default_detail()
        if (location_category) {
            detail.location_id = (location_category.location_id)?location_category.location_id:null
			detail._location_types_id = (location_category._location_types_id)?location_category._location_types_id:null
			detail.category_id = (location_category.category_id)?location_category.category_id:null
			detail.enabled = (location_category.enabled)?location_category.enabled:1
			detail.date_created = (location_category.date_created)?location_category.date_created:formatDateMySQL()
			detail.created_by = (location_category.created_by)?location_category.created_by:created_by
			detail.date_modified = (location_category.date_modified)?location_category.date_modified:formatDateMySQL()
			detail.modified_by = (location_category.modified_by)?location_category.modified_by:modified_by
			detail.note = (location_category.note)?location_category.note:null
        }
        
        LocationCategory.detail = detail
        return detail
    }
    
    const load_all = function (location_categories) {
        LocationCategory.all = new Map()
    
        if (!location_categories) {
            return
        }
        $.each(location_categories, function (i, location_category) {
            let detail = set(location_category)
            LocationCategory.all.set('location_id', detail)
        })
        
        console.log(' LocationCategory.all',  LocationCategory.all);
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

LocationCategory.init()
//end object
