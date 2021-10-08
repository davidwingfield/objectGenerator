    
const ProductSeason = (function () {
    'use strict'
    
    const base_url = '/product_season'
    const _input_product_season_product_id = document.getElementById('input_product_season_product_id')
	const _input_product_season_season_id = document.getElementById('input_product_season_season_id')
	const _input_product_season_disabled_dow = document.getElementById('input_product_season_disabled_dow')
	const _input_product_season_seasons_border = document.getElementById('input_product_season_seasons_border')
	const _input_product_season_seasons_text = document.getElementById('input_product_season_seasons_text')
	const _input_product_season_seasons_background = document.getElementById('input_product_season_seasons_background')
	const _input_product_season_id = document.getElementById('input_product_season_id')
	const _input_product_season_enabled = document.getElementById('input_product_season_enabled')
	const _input_product_season_date_created = document.getElementById('input_product_season_date_created')
	const _input_product_season_created_by = document.getElementById('input_product_season_created_by')
	const _input_product_season_date_modified = document.getElementById('input_product_season_date_modified')
	const _input_product_season_modified_by = document.getElementById('input_product_season_modified_by')
	const _input_product_season_note = document.getElementById('input_product_season_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_product_season_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            product_id: null,
			season_id: null,
			disabled_dow: null,
			seasons_border: null,
			seasons_text: null,
			seasons_background: null,
			id: null,
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
        
    
    const set = function (product_season) {
        let detail = _default_detail()
        if (product_season) {
            detail.product_id = (product_season.product_id)?product_season.product_id:null
			detail.season_id = (product_season.season_id)?product_season.season_id:null
			detail.disabled_dow = (product_season.disabled_dow)?product_season.disabled_dow:null
			detail.seasons_border = (product_season.seasons_border)?product_season.seasons_border:null
			detail.seasons_text = (product_season.seasons_text)?product_season.seasons_text:null
			detail.seasons_background = (product_season.seasons_background)?product_season.seasons_background:null
			detail.id = (product_season.id)?product_season.id:null
			detail.enabled = (product_season.enabled)?product_season.enabled:1
			detail.date_created = (product_season.date_created)?product_season.date_created:formatDateMySQL()
			detail.created_by = (product_season.created_by)?product_season.created_by:created_by
			detail.date_modified = (product_season.date_modified)?product_season.date_modified:formatDateMySQL()
			detail.modified_by = (product_season.modified_by)?product_season.modified_by:modified_by
			detail.note = (product_season.note)?product_season.note:null
        }
        
        ProductSeason.detail = detail
        return detail
    }
    
    const load_all = function (product_seasons) {
        ProductSeason.all = new Map()
    
        if (!product_seasons) {
            return
        }
        $.each(product_seasons, function (i, product_season) {
            let detail = set(product_season)
            ProductSeason.all.set(detail)
        })
        
        console.log(' ProductSeason.all',  ProductSeason.all);
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

ProductSeason.init()
//end object
