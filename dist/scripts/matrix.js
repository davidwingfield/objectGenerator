    
const Matrix = (function () {
    'use strict'
    
    const base_url = '/matrix'
    const _input_matrix_id = document.getElementById('input_matrix_id')
	const _input_matrix_product_id = document.getElementById('input_matrix_product_id')
	const _input_matrix_season_id = document.getElementById('input_matrix_season_id')
	const _input_matrix_unit_id = document.getElementById('input_matrix_unit_id')
	const _input_matrix_variant_id = document.getElementById('input_matrix_variant_id')
	const _input_matrix_name = document.getElementById('input_matrix_name')
	const _input_matrix_cost = document.getElementById('input_matrix_cost')
	const _input_matrix_margin = document.getElementById('input_matrix_margin')
	const _input_matrix_price = document.getElementById('input_matrix_price')
	const _input_matrix_saved = document.getElementById('input_matrix_saved')
	const _input_matrix_has_pricing = document.getElementById('input_matrix_has_pricing')
	const _input_matrix_flat_cost = document.getElementById('input_matrix_flat_cost')
	const _input_matrix_flat_margin = document.getElementById('input_matrix_flat_margin')
	const _input_matrix_flat_price = document.getElementById('input_matrix_flat_price')
	const _input_matrix_enabled = document.getElementById('input_matrix_enabled')
	const _input_matrix_date_created = document.getElementById('input_matrix_date_created')
	const _input_matrix_created_by = document.getElementById('input_matrix_created_by')
	const _input_matrix_date_modified = document.getElementById('input_matrix_date_modified')
	const _input_matrix_modified_by = document.getElementById('input_matrix_modified_by')
	const _input_matrix_note = document.getElementById('input_matrix_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_matrix_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			product_id: null,
			season_id: null,
			unit_id: null,
			variant_id: null,
			name: null,
			cost: null,
			margin: null,
			price: null,
			saved: null,
			has_pricing: 1,
			flat_cost: 1,
			flat_margin: 1,
			flat_price: 1,
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
            
    
    const set = function (matrix) {
        let detail = _default_detail()
        if (matrix) {
            detail.id = (matrix.id)?matrix.id:null
			detail.product_id = (matrix.product_id)?matrix.product_id:null
			detail.season_id = (matrix.season_id)?matrix.season_id:null
			detail.unit_id = (matrix.unit_id)?matrix.unit_id:null
			detail.variant_id = (matrix.variant_id)?matrix.variant_id:null
			detail.name = (matrix.name)?matrix.name:null
			detail.cost = (matrix.cost)?matrix.cost:null
			detail.margin = (matrix.margin)?matrix.margin:null
			detail.price = (matrix.price)?matrix.price:null
			detail.saved = (matrix.saved)?matrix.saved:null
			detail.has_pricing = (matrix.has_pricing)?matrix.has_pricing:1
			detail.flat_cost = (matrix.flat_cost)?matrix.flat_cost:1
			detail.flat_margin = (matrix.flat_margin)?matrix.flat_margin:1
			detail.flat_price = (matrix.flat_price)?matrix.flat_price:1
			detail.enabled = (matrix.enabled)?matrix.enabled:1
			detail.date_created = (matrix.date_created)?matrix.date_created:formatDateMySQL()
			detail.created_by = (matrix.created_by)?matrix.created_by:created_by
			detail.date_modified = (matrix.date_modified)?matrix.date_modified:formatDateMySQL()
			detail.modified_by = (matrix.modified_by)?matrix.modified_by:modified_by
			detail.note = (matrix.note)?matrix.note:null
        }
        
        Matrix.detail = detail
        return detail
    }
    
    const load_all = function (matrices) {
        Matrix.all = new Map()
    
        if (!matrices) {
            return
        }
        $.each(matrices, function (i, matrix) {
            let detail = set(matrix)
            Matrix.all.set('id', detail)
        })
        
        console.log(' Matrix.all',  Matrix.all);
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

Matrix.init()
//end object
