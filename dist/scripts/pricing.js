    
const Pricing = (function () {
    'use strict'
    
    const base_url = '/pricing'
    const _input_pricing_id = document.getElementById('input_pricing_id')
	const _input_pricing_matrix_id = document.getElementById('input_pricing_matrix_id')
	const _input_pricing_variant_id = document.getElementById('input_pricing_variant_id')
	const _input_pricing_name = document.getElementById('input_pricing_name')
	const _input_pricing_mon = document.getElementById('input_pricing_mon')
	const _input_pricing_tue = document.getElementById('input_pricing_tue')
	const _input_pricing_wed = document.getElementById('input_pricing_wed')
	const _input_pricing_thu = document.getElementById('input_pricing_thu')
	const _input_pricing_fri = document.getElementById('input_pricing_fri')
	const _input_pricing_sat = document.getElementById('input_pricing_sat')
	const _input_pricing_sun = document.getElementById('input_pricing_sun')
	const _input_pricing_monMargin = document.getElementById('input_pricing_monMargin')
	const _input_pricing_tueMargin = document.getElementById('input_pricing_tueMargin')
	const _input_pricing_wedMargin = document.getElementById('input_pricing_wedMargin')
	const _input_pricing_thuMargin = document.getElementById('input_pricing_thuMargin')
	const _input_pricing_friMargin = document.getElementById('input_pricing_friMargin')
	const _input_pricing_satMargin = document.getElementById('input_pricing_satMargin')
	const _input_pricing_sunMargin = document.getElementById('input_pricing_sunMargin')
	const _input_pricing_count = document.getElementById('input_pricing_count')
	const _input_pricing_cost = document.getElementById('input_pricing_cost')
	const _input_pricing_margin = document.getElementById('input_pricing_margin')
	const _input_pricing_price = document.getElementById('input_pricing_price')
	const _input_pricing_enabled = document.getElementById('input_pricing_enabled')
	const _input_pricing_date_created = document.getElementById('input_pricing_date_created')
	const _input_pricing_created_by = document.getElementById('input_pricing_created_by')
	const _input_pricing_date_modified = document.getElementById('input_pricing_date_modified')
	const _input_pricing_modified_by = document.getElementById('input_pricing_modified_by')
	const _input_pricing_note = document.getElementById('input_pricing_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_pricing_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			matrix_id: null,
			variant_id: null,
			name: null,
			mon: null,
			tue: null,
			wed: null,
			thu: null,
			fri: null,
			sat: null,
			sun: null,
			monMargin: null,
			tueMargin: null,
			wedMargin: null,
			thuMargin: null,
			friMargin: null,
			satMargin: null,
			sunMargin: null,
			count: null,
			cost: null,
			margin: null,
			price: null,
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
            
    
    const set = function (pricing) {
        let detail = _default_detail()
        if (pricing) {
            detail.id = (pricing.id)?pricing.id:null
			detail.matrix_id = (pricing.matrix_id)?pricing.matrix_id:null
			detail.variant_id = (pricing.variant_id)?pricing.variant_id:null
			detail.name = (pricing.name)?pricing.name:null
			detail.mon = (pricing.mon)?pricing.mon:null
			detail.tue = (pricing.tue)?pricing.tue:null
			detail.wed = (pricing.wed)?pricing.wed:null
			detail.thu = (pricing.thu)?pricing.thu:null
			detail.fri = (pricing.fri)?pricing.fri:null
			detail.sat = (pricing.sat)?pricing.sat:null
			detail.sun = (pricing.sun)?pricing.sun:null
			detail.monMargin = (pricing.monMargin)?pricing.monMargin:null
			detail.tueMargin = (pricing.tueMargin)?pricing.tueMargin:null
			detail.wedMargin = (pricing.wedMargin)?pricing.wedMargin:null
			detail.thuMargin = (pricing.thuMargin)?pricing.thuMargin:null
			detail.friMargin = (pricing.friMargin)?pricing.friMargin:null
			detail.satMargin = (pricing.satMargin)?pricing.satMargin:null
			detail.sunMargin = (pricing.sunMargin)?pricing.sunMargin:null
			detail.count = (pricing.count)?pricing.count:null
			detail.cost = (pricing.cost)?pricing.cost:null
			detail.margin = (pricing.margin)?pricing.margin:null
			detail.price = (pricing.price)?pricing.price:null
			detail.enabled = (pricing.enabled)?pricing.enabled:1
			detail.date_created = (pricing.date_created)?pricing.date_created:formatDateMySQL()
			detail.created_by = (pricing.created_by)?pricing.created_by:created_by
			detail.date_modified = (pricing.date_modified)?pricing.date_modified:formatDateMySQL()
			detail.modified_by = (pricing.modified_by)?pricing.modified_by:modified_by
			detail.note = (pricing.note)?pricing.note:null
        }
        
        Pricing.detail = detail
        return detail
    }
    
    const load_all = function (pricings) {
        Pricing.all = new Map()
    
        if (!pricings) {
            return
        }
        $.each(pricings, function (i, pricing) {
            let detail = set(pricing)
            Pricing.all.set('id', detail)
        })
        
        console.log(' Pricing.all',  Pricing.all);
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

Pricing.init()
//end object
