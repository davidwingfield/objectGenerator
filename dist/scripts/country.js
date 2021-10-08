    
const Country = (function () {
    'use strict'
    
    const base_url = '/country'
    const _input_country_country_id = document.getElementById('input_country_country_id')
	const _input_country_country = document.getElementById('input_country_country')
	const _input_country_last_update = document.getElementById('input_country_last_update')
	const _input_country_id = document.getElementById('input_country_id')
	const _input_country_currency_id = document.getElementById('input_country_currency_id')
	const _input_country_sort_order = document.getElementById('input_country_sort_order')
	const _input_country_name = document.getElementById('input_country_name')
	const _input_country_iso2 = document.getElementById('input_country_iso2')
	const _input_country_iso3 = document.getElementById('input_country_iso3')
	const _input_country_enabled = document.getElementById('input_country_enabled')
	const _input_country_date_created = document.getElementById('input_country_date_created')
	const _input_country_created_by = document.getElementById('input_country_created_by')
	const _input_country_date_modified = document.getElementById('input_country_date_modified')
	const _input_country_modified_by = document.getElementById('input_country_modified_by')
	const _input_country_note = document.getElementById('input_country_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_country_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            country_id: null,
			country: null,
			last_update: null,
			id: null,
			currency_id: null,
			sort_order: null,
			name: null,
			iso2: null,
			iso3: null,
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
        
    
    const set = function (country) {
        let detail = _default_detail()
        if (country) {
            detail.country_id = (country.country_id)?country.country_id:null
			detail.country = (country.country)?country.country:null
			detail.last_update = (country.last_update)?country.last_update:null
			detail.id = (country.id)?country.id:null
			detail.currency_id = (country.currency_id)?country.currency_id:null
			detail.sort_order = (country.sort_order)?country.sort_order:null
			detail.name = (country.name)?country.name:null
			detail.iso2 = (country.iso2)?country.iso2:null
			detail.iso3 = (country.iso3)?country.iso3:null
			detail.enabled = (country.enabled)?country.enabled:1
			detail.date_created = (country.date_created)?country.date_created:formatDateMySQL()
			detail.created_by = (country.created_by)?country.created_by:created_by
			detail.date_modified = (country.date_modified)?country.date_modified:formatDateMySQL()
			detail.modified_by = (country.modified_by)?country.modified_by:modified_by
			detail.note = (country.note)?country.note:null
        }
        
        Country.detail = detail
        return detail
    }
    
    const load_all = function (countries) {
        Country.all = new Map()
    
        if (!countries) {
            return
        }
        $.each(countries, function (i, country) {
            let detail = set(country)
            Country.all.set(detail)
        })
        
        console.log(' Country.all',  Country.all);
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

Country.init()
//end object
