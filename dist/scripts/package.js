    
const Package = (function () {
    'use strict'
    
    const base_url = '/package'
    const _input_package_id = document.getElementById('input_package_id')
	const _input_package_name = document.getElementById('input_package_name')
	const _input_package_day_span = document.getElementById('input_package_day_span')
	const _input_package_city_id = document.getElementById('input_package_city_id')
	const _input_package_min_pax = document.getElementById('input_package_min_pax')
	const _input_package_max_pax = document.getElementById('input_package_max_pax')
	const _input_package_description_long = document.getElementById('input_package_description_long')
	const _input_package_description_short = document.getElementById('input_package_description_short')
	const _input_package_available_start = document.getElementById('input_package_available_start')
	const _input_package_available_end = document.getElementById('input_package_available_end')
	const _input_package_cost = document.getElementById('input_package_cost')
	const _input_package_price = document.getElementById('input_package_price')
	const _input_package_margin = document.getElementById('input_package_margin')
	const _input_package_enabled = document.getElementById('input_package_enabled')
	const _input_package_date_created = document.getElementById('input_package_date_created')
	const _input_package_created_by = document.getElementById('input_package_created_by')
	const _input_package_date_modified = document.getElementById('input_package_date_modified')
	const _input_package_modified_by = document.getElementById('input_package_modified_by')
	const _input_package_note = document.getElementById('input_package_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_package_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			name: null,
			day_span: null,
			city_id: null,
			min_pax: null,
			max_pax: null,
			description_long: null,
			description_short: null,
			available_start: null,
			available_end: null,
			cost: null,
			price: null,
			margin: null,
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
            
    
    const set = function (package) {
        let detail = _default_detail()
        if (package) {
            detail.id = (package.id)?package.id:null
			detail.name = (package.name)?package.name:null
			detail.day_span = (package.day_span)?package.day_span:null
			detail.city_id = (package.city_id)?package.city_id:null
			detail.min_pax = (package.min_pax)?package.min_pax:null
			detail.max_pax = (package.max_pax)?package.max_pax:null
			detail.description_long = (package.description_long)?package.description_long:null
			detail.description_short = (package.description_short)?package.description_short:null
			detail.available_start = (package.available_start)?package.available_start:null
			detail.available_end = (package.available_end)?package.available_end:null
			detail.cost = (package.cost)?package.cost:null
			detail.price = (package.price)?package.price:null
			detail.margin = (package.margin)?package.margin:null
			detail.enabled = (package.enabled)?package.enabled:1
			detail.date_created = (package.date_created)?package.date_created:formatDateMySQL()
			detail.created_by = (package.created_by)?package.created_by:created_by
			detail.date_modified = (package.date_modified)?package.date_modified:formatDateMySQL()
			detail.modified_by = (package.modified_by)?package.modified_by:modified_by
			detail.note = (package.note)?package.note:null
        }
        
        Package.detail = detail
        return detail
    }
    
    const load_all = function (packages) {
        Package.all = new Map()
    
        if (!packages) {
            return
        }
        $.each(packages, function (i, package) {
            let detail = set(package)
            Package.all.set('id', detail)
        })
        
        console.log(' Package.all',  Package.all);
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

Package.init()
//end object
