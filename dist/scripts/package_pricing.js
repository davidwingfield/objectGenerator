    
const PackagePricing = (function () {
    'use strict'
    
    const base_url = '/package_pricing'
    const _input_package_pricing_id = document.getElementById('input_package_pricing_id')
	const _input_package_pricing_package_id = document.getElementById('input_package_pricing_package_id')
	const _input_package_pricing_color_scheme_id = document.getElementById('input_package_pricing_color_scheme_id')
	const _input_package_pricing_name = document.getElementById('input_package_pricing_name')
	const _input_package_pricing_price = document.getElementById('input_package_pricing_price')
	const _input_package_pricing_margin = document.getElementById('input_package_pricing_margin')
	const _input_package_pricing_background_color = document.getElementById('input_package_pricing_background_color')
	const _input_package_pricing_border_color = document.getElementById('input_package_pricing_border_color')
	const _input_package_pricing_text_color = document.getElementById('input_package_pricing_text_color')
	const _input_package_pricing_enabled = document.getElementById('input_package_pricing_enabled')
	const _input_package_pricing_date_created = document.getElementById('input_package_pricing_date_created')
	const _input_package_pricing_created_by = document.getElementById('input_package_pricing_created_by')
	const _input_package_pricing_date_modified = document.getElementById('input_package_pricing_date_modified')
	const _input_package_pricing_modified_by = document.getElementById('input_package_pricing_modified_by')
	const _input_package_pricing_note = document.getElementById('input_package_pricing_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_package_pricing_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			package_id: null,
			color_scheme_id: null,
			name: null,
			price: null,
			margin: null,
			background_color: null,
			border_color: null,
			text_color: null,
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
            
    
    const set = function (package_pricing) {
        let detail = _default_detail()
        if (package_pricing) {
            detail.id = (package_pricing.id)?package_pricing.id:null
			detail.package_id = (package_pricing.package_id)?package_pricing.package_id:null
			detail.color_scheme_id = (package_pricing.color_scheme_id)?package_pricing.color_scheme_id:null
			detail.name = (package_pricing.name)?package_pricing.name:null
			detail.price = (package_pricing.price)?package_pricing.price:null
			detail.margin = (package_pricing.margin)?package_pricing.margin:null
			detail.background_color = (package_pricing.background_color)?package_pricing.background_color:null
			detail.border_color = (package_pricing.border_color)?package_pricing.border_color:null
			detail.text_color = (package_pricing.text_color)?package_pricing.text_color:null
			detail.enabled = (package_pricing.enabled)?package_pricing.enabled:1
			detail.date_created = (package_pricing.date_created)?package_pricing.date_created:formatDateMySQL()
			detail.created_by = (package_pricing.created_by)?package_pricing.created_by:created_by
			detail.date_modified = (package_pricing.date_modified)?package_pricing.date_modified:formatDateMySQL()
			detail.modified_by = (package_pricing.modified_by)?package_pricing.modified_by:modified_by
			detail.note = (package_pricing.note)?package_pricing.note:null
        }
        
        PackagePricing.detail = detail
        return detail
    }
    
    const load_all = function (package_pricings) {
        PackagePricing.all = new Map()
    
        if (!package_pricings) {
            return
        }
        $.each(package_pricings, function (i, package_pricing) {
            let detail = set(package_pricing)
            PackagePricing.all.set('id', detail)
        })
        
        console.log(' PackagePricing.all',  PackagePricing.all);
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

PackagePricing.init()
//end object
