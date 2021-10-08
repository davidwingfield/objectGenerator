    
const PackagePricingDate = (function () {
    'use strict'
    
    const base_url = '/package_pricing_date'
    const _input_package_pricing_date_package_id = document.getElementById('input_package_pricing_date_package_id')
	const _input_package_pricing_date_date = document.getElementById('input_package_pricing_date_date')
	const _input_package_pricing_date_package_pricing_id = document.getElementById('input_package_pricing_date_package_pricing_id')
	const _input_package_pricing_date_enabled = document.getElementById('input_package_pricing_date_enabled')
	const _input_package_pricing_date_date_created = document.getElementById('input_package_pricing_date_date_created')
	const _input_package_pricing_date_created_by = document.getElementById('input_package_pricing_date_created_by')
	const _input_package_pricing_date_date_modified = document.getElementById('input_package_pricing_date_date_modified')
	const _input_package_pricing_date_modified_by = document.getElementById('input_package_pricing_date_modified_by')
	const _input_package_pricing_date_note = document.getElementById('input_package_pricing_date_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_package_pricing_date_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            package_id: null,
			date: null,
			package_pricing_id: null,
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
        
    
    const set = function (package_pricing_date) {
        let detail = _default_detail()
        if (package_pricing_date) {
            detail.package_id = (package_pricing_date.package_id)?package_pricing_date.package_id:null
			detail.date = (package_pricing_date.date)?package_pricing_date.date:null
			detail.package_pricing_id = (package_pricing_date.package_pricing_id)?package_pricing_date.package_pricing_id:null
			detail.enabled = (package_pricing_date.enabled)?package_pricing_date.enabled:1
			detail.date_created = (package_pricing_date.date_created)?package_pricing_date.date_created:formatDateMySQL()
			detail.created_by = (package_pricing_date.created_by)?package_pricing_date.created_by:created_by
			detail.date_modified = (package_pricing_date.date_modified)?package_pricing_date.date_modified:formatDateMySQL()
			detail.modified_by = (package_pricing_date.modified_by)?package_pricing_date.modified_by:modified_by
			detail.note = (package_pricing_date.note)?package_pricing_date.note:null
        }
        
        PackagePricingDate.detail = detail
        return detail
    }
    
    const load_all = function (package_pricing_dates) {
        PackagePricingDate.all = new Map()
    
        if (!package_pricing_dates) {
            return
        }
        $.each(package_pricing_dates, function (i, package_pricing_date) {
            let detail = set(package_pricing_date)
            PackagePricingDate.all.set(detail)
        })
        
        console.log(' PackagePricingDate.all',  PackagePricingDate.all);
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

PackagePricingDate.init()
//end object
