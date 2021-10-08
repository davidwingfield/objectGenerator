    
const Inventory = (function () {
    'use strict'
    
    const base_url = '/inventory'
    const _input_inventory_inventory_id = document.getElementById('input_inventory_inventory_id')
	const _input_inventory_film_id = document.getElementById('input_inventory_film_id')
	const _input_inventory_store_id = document.getElementById('input_inventory_store_id')
	const _input_inventory_last_update = document.getElementById('input_inventory_last_update')
	const _input_inventory_id = document.getElementById('input_inventory_id')
	const _input_inventory_profile_id = document.getElementById('input_inventory_profile_id')
	const _input_inventory_date_id = document.getElementById('input_inventory_date_id')
	const _input_inventory_unit_id = document.getElementById('input_inventory_unit_id')
	const _input_inventory_product_id = document.getElementById('input_inventory_product_id')
	const _input_inventory_description = document.getElementById('input_inventory_description')
	const _input_inventory_qty_available = document.getElementById('input_inventory_qty_available')
	const _input_inventory_qty_used = document.getElementById('input_inventory_qty_used')
	const _input_inventory_qty_alotted = document.getElementById('input_inventory_qty_alotted')
	const _input_inventory_qty_lost = document.getElementById('input_inventory_qty_lost')
	const _input_inventory_enabled = document.getElementById('input_inventory_enabled')
	const _input_inventory_date_created = document.getElementById('input_inventory_date_created')
	const _input_inventory_created_by = document.getElementById('input_inventory_created_by')
	const _input_inventory_date_modified = document.getElementById('input_inventory_date_modified')
	const _input_inventory_modified_by = document.getElementById('input_inventory_modified_by')
	const _input_inventory_note = document.getElementById('input_inventory_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_inventory_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            inventory_id: null,
			film_id: null,
			store_id: 1,
			last_update: null,
			id: null,
			profile_id: null,
			date_id: null,
			unit_id: null,
			product_id: null,
			description: null,
			qty_available: null,
			qty_used: null,
			qty_alotted: null,
			qty_lost: null,
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
        
    
    const set = function (inventory) {
        let detail = _default_detail()
        if (inventory) {
            detail.inventory_id = (inventory.inventory_id)?inventory.inventory_id:null
			detail.film_id = (inventory.film_id)?inventory.film_id:null
			detail.store_id = (inventory.store_id)?inventory.store_id:1
			detail.last_update = (inventory.last_update)?inventory.last_update:null
			detail.id = (inventory.id)?inventory.id:null
			detail.profile_id = (inventory.profile_id)?inventory.profile_id:null
			detail.date_id = (inventory.date_id)?inventory.date_id:null
			detail.unit_id = (inventory.unit_id)?inventory.unit_id:null
			detail.product_id = (inventory.product_id)?inventory.product_id:null
			detail.description = (inventory.description)?inventory.description:null
			detail.qty_available = (inventory.qty_available)?inventory.qty_available:null
			detail.qty_used = (inventory.qty_used)?inventory.qty_used:null
			detail.qty_alotted = (inventory.qty_alotted)?inventory.qty_alotted:null
			detail.qty_lost = (inventory.qty_lost)?inventory.qty_lost:null
			detail.enabled = (inventory.enabled)?inventory.enabled:1
			detail.date_created = (inventory.date_created)?inventory.date_created:formatDateMySQL()
			detail.created_by = (inventory.created_by)?inventory.created_by:created_by
			detail.date_modified = (inventory.date_modified)?inventory.date_modified:formatDateMySQL()
			detail.modified_by = (inventory.modified_by)?inventory.modified_by:modified_by
			detail.note = (inventory.note)?inventory.note:null
        }
        
        Inventory.detail = detail
        return detail
    }
    
    const load_all = function (inventories) {
        Inventory.all = new Map()
    
        if (!inventories) {
            return
        }
        $.each(inventories, function (i, inventory) {
            let detail = set(inventory)
            Inventory.all.set(detail)
        })
        
        console.log(' Inventory.all',  Inventory.all);
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

Inventory.init()
//end object
