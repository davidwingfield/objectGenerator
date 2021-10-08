    
const PackageProduct = (function () {
    'use strict'
    
    const base_url = '/package_product'
    const _input_package_product_id = document.getElementById('input_package_product_id')
	const _input_package_product_package_id = document.getElementById('input_package_product_package_id')
	const _input_package_product_product_id = document.getElementById('input_package_product_product_id')
	const _input_package_product_product_label = document.getElementById('input_package_product_product_label')
	const _input_package_product_unit_id = document.getElementById('input_package_product_unit_id')
	const _input_package_product_unit_label = document.getElementById('input_package_product_unit_label')
	const _input_package_product_day_span = document.getElementById('input_package_product_day_span')
	const _input_package_product_sort_order = document.getElementById('input_package_product_sort_order')
	const _input_package_product_allow_substitution = document.getElementById('input_package_product_allow_substitution')
	const _input_package_product_enabled = document.getElementById('input_package_product_enabled')
	const _input_package_product_date_created = document.getElementById('input_package_product_date_created')
	const _input_package_product_created_by = document.getElementById('input_package_product_created_by')
	const _input_package_product_date_modified = document.getElementById('input_package_product_date_modified')
	const _input_package_product_modified_by = document.getElementById('input_package_product_modified_by')
	const _input_package_product_note = document.getElementById('input_package_product_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_package_product_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			package_id: null,
			product_id: null,
			product_label: null,
			unit_id: null,
			unit_label: null,
			day_span: null,
			sort_order: null,
			allow_substitution: 1,
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
            
    
    const set = function (package_product) {
        let detail = _default_detail()
        if (package_product) {
            detail.id = (package_product.id)?package_product.id:null
			detail.package_id = (package_product.package_id)?package_product.package_id:null
			detail.product_id = (package_product.product_id)?package_product.product_id:null
			detail.product_label = (package_product.product_label)?package_product.product_label:null
			detail.unit_id = (package_product.unit_id)?package_product.unit_id:null
			detail.unit_label = (package_product.unit_label)?package_product.unit_label:null
			detail.day_span = (package_product.day_span)?package_product.day_span:null
			detail.sort_order = (package_product.sort_order)?package_product.sort_order:null
			detail.allow_substitution = (package_product.allow_substitution)?package_product.allow_substitution:1
			detail.enabled = (package_product.enabled)?package_product.enabled:1
			detail.date_created = (package_product.date_created)?package_product.date_created:formatDateMySQL()
			detail.created_by = (package_product.created_by)?package_product.created_by:created_by
			detail.date_modified = (package_product.date_modified)?package_product.date_modified:formatDateMySQL()
			detail.modified_by = (package_product.modified_by)?package_product.modified_by:modified_by
			detail.note = (package_product.note)?package_product.note:null
        }
        
        PackageProduct.detail = detail
        return detail
    }
    
    const load_all = function (package_products) {
        PackageProduct.all = new Map()
    
        if (!package_products) {
            return
        }
        $.each(package_products, function (i, package_product) {
            let detail = set(package_product)
            PackageProduct.all.set('id', detail)
        })
        
        console.log(' PackageProduct.all',  PackageProduct.all);
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

PackageProduct.init()
//end object
