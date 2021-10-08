    
const ProductDraft = (function () {
    'use strict'
    
    const base_url = '/product_draft'
    const _input_product_draft_id = document.getElementById('input_product_draft_id')
	const _input_product_draft_product_id = document.getElementById('input_product_draft_product_id')
	const _input_product_draft_product_json = document.getElementById('input_product_draft_product_json')
	const _input_product_draft_enabled = document.getElementById('input_product_draft_enabled')
	const _input_product_draft_date_created = document.getElementById('input_product_draft_date_created')
	const _input_product_draft_created_by = document.getElementById('input_product_draft_created_by')
	const _input_product_draft_date_modified = document.getElementById('input_product_draft_date_modified')
	const _input_product_draft_modified_by = document.getElementById('input_product_draft_modified_by')
	const _input_product_draft_note = document.getElementById('input_product_draft_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_product_draft_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			product_id: null,
			product_json: null,
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
            
    
    const set = function (product_draft) {
        let detail = _default_detail()
        if (product_draft) {
            detail.id = (product_draft.id)?product_draft.id:null
			detail.product_id = (product_draft.product_id)?product_draft.product_id:null
			detail.product_json = (product_draft.product_json)?product_draft.product_json:null
			detail.enabled = (product_draft.enabled)?product_draft.enabled:1
			detail.date_created = (product_draft.date_created)?product_draft.date_created:formatDateMySQL()
			detail.created_by = (product_draft.created_by)?product_draft.created_by:created_by
			detail.date_modified = (product_draft.date_modified)?product_draft.date_modified:formatDateMySQL()
			detail.modified_by = (product_draft.modified_by)?product_draft.modified_by:modified_by
			detail.note = (product_draft.note)?product_draft.note:null
        }
        
        ProductDraft.detail = detail
        return detail
    }
    
    const load_all = function (product_drafts) {
        ProductDraft.all = new Map()
    
        if (!product_drafts) {
            return
        }
        $.each(product_drafts, function (i, product_draft) {
            let detail = set(product_draft)
            ProductDraft.all.set('id', detail)
        })
        
        console.log(' ProductDraft.all',  ProductDraft.all);
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

ProductDraft.init()
//end object
