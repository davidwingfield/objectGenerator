    
const Season = (function () {
    'use strict'
    
    const base_url = '/season'
    const _input_season_id = document.getElementById('input_season_id')
	const _input_season_name = document.getElementById('input_season_name')
	const _input_season_class = document.getElementById('input_season_class')
	const _input_season_category_id = document.getElementById('input_season_category_id')
	const _input_season_background_color = document.getElementById('input_season_background_color')
	const _input_season_text_color = document.getElementById('input_season_text_color')
	const _input_season_border_color = document.getElementById('input_season_border_color')
	const _input_season_view_product_index = document.getElementById('input_season_view_product_index')
	const _input_season_view_product_index_filter = document.getElementById('input_season_view_product_index_filter')
	const _input_season_view_product_index_search = document.getElementById('input_season_view_product_index_search')
	const _input_season_view_product_edit = document.getElementById('input_season_view_product_edit')
	const _input_season_view_product_package_edit = document.getElementById('input_season_view_product_package_edit')
	const _input_season_view_product_package_index = document.getElementById('input_season_view_product_package_index')
	const _input_season_enabled = document.getElementById('input_season_enabled')
	const _input_season_date_created = document.getElementById('input_season_date_created')
	const _input_season_created_by = document.getElementById('input_season_created_by')
	const _input_season_date_modified = document.getElementById('input_season_date_modified')
	const _input_season_modified_by = document.getElementById('input_season_modified_by')
	const _input_season_note = document.getElementById('input_season_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_season_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			name: null,
			class: null,
			category_id: null,
			background_color: null,
			text_color: null,
			border_color: null,
			view_product_index: 1,
			view_product_index_filter: 1,
			view_product_index_search: 1,
			view_product_edit: 1,
			view_product_package_edit: 1,
			view_product_package_index: 1,
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
            
    
    const set = function (season) {
        let detail = _default_detail()
        if (season) {
            detail.id = (season.id)?season.id:null
			detail.name = (season.name)?season.name:null
			detail.class = (season.class)?season.class:null
			detail.category_id = (season.category_id)?season.category_id:null
			detail.background_color = (season.background_color)?season.background_color:null
			detail.text_color = (season.text_color)?season.text_color:null
			detail.border_color = (season.border_color)?season.border_color:null
			detail.view_product_index = (season.view_product_index)?season.view_product_index:1
			detail.view_product_index_filter = (season.view_product_index_filter)?season.view_product_index_filter:1
			detail.view_product_index_search = (season.view_product_index_search)?season.view_product_index_search:1
			detail.view_product_edit = (season.view_product_edit)?season.view_product_edit:1
			detail.view_product_package_edit = (season.view_product_package_edit)?season.view_product_package_edit:1
			detail.view_product_package_index = (season.view_product_package_index)?season.view_product_package_index:1
			detail.enabled = (season.enabled)?season.enabled:1
			detail.date_created = (season.date_created)?season.date_created:formatDateMySQL()
			detail.created_by = (season.created_by)?season.created_by:created_by
			detail.date_modified = (season.date_modified)?season.date_modified:formatDateMySQL()
			detail.modified_by = (season.modified_by)?season.modified_by:modified_by
			detail.note = (season.note)?season.note:null
        }
        
        Season.detail = detail
        return detail
    }
    
    const load_all = function (seasons) {
        Season.all = new Map()
    
        if (!seasons) {
            return
        }
        $.each(seasons, function (i, season) {
            let detail = set(season)
            Season.all.set('id', detail)
        })
        
        console.log(' Season.all',  Season.all);
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

Season.init()
//end object
