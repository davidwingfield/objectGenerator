    
const Province = (function () {
    'use strict'
    
    const base_url = '/province'
    const _input_province_id = document.getElementById('input_province_id')
	const _input_province_country_id = document.getElementById('input_province_country_id')
	const _input_province_name = document.getElementById('input_province_name')
	const _input_province_iso2 = document.getElementById('input_province_iso2')
	const _input_province_iso3 = document.getElementById('input_province_iso3')
	const _input_province_sort_order = document.getElementById('input_province_sort_order')
	const _input_province_enabled = document.getElementById('input_province_enabled')
	const _input_province_date_created = document.getElementById('input_province_date_created')
	const _input_province_created_by = document.getElementById('input_province_created_by')
	const _input_province_date_modified = document.getElementById('input_province_date_modified')
	const _input_province_modified_by = document.getElementById('input_province_modified_by')
	const _input_province_note = document.getElementById('input_province_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_province_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			country_id: null,
			name: null,
			iso2: null,
			iso3: null,
			sort_order: null,
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
            
    
    const set = function (province) {
        let detail = _default_detail()
        if (province) {
            detail.id = (province.id)?province.id:null
			detail.country_id = (province.country_id)?province.country_id:null
			detail.name = (province.name)?province.name:null
			detail.iso2 = (province.iso2)?province.iso2:null
			detail.iso3 = (province.iso3)?province.iso3:null
			detail.sort_order = (province.sort_order)?province.sort_order:null
			detail.enabled = (province.enabled)?province.enabled:1
			detail.date_created = (province.date_created)?province.date_created:formatDateMySQL()
			detail.created_by = (province.created_by)?province.created_by:created_by
			detail.date_modified = (province.date_modified)?province.date_modified:formatDateMySQL()
			detail.modified_by = (province.modified_by)?province.modified_by:modified_by
			detail.note = (province.note)?province.note:null
        }
        
        Province.detail = detail
        return detail
    }
    
    const load_all = function (provinces) {
        Province.all = new Map()
    
        if (!provinces) {
            return
        }
        $.each(provinces, function (i, province) {
            let detail = set(province)
            Province.all.set('id', detail)
        })
        
        console.log(' Province.all',  Province.all);
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

Province.init()
//end object
