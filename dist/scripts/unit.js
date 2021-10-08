    
const Unit = (function () {
    'use strict'
    
    const base_url = '/unit'
    const _input_unit_id = document.getElementById('input_unit_id')
	const _input_unit_category_id = document.getElementById('input_unit_category_id')
	const _input_unit_api_id = document.getElementById('input_unit_api_id')
	const _input_unit_name = document.getElementById('input_unit_name')
	const _input_unit_room_code = document.getElementById('input_unit_room_code')
	const _input_unit_enabled = document.getElementById('input_unit_enabled')
	const _input_unit_date_created = document.getElementById('input_unit_date_created')
	const _input_unit_created_by = document.getElementById('input_unit_created_by')
	const _input_unit_date_modified = document.getElementById('input_unit_date_modified')
	const _input_unit_modified_by = document.getElementById('input_unit_modified_by')
	const _input_unit_note = document.getElementById('input_unit_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_unit_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			category_id: null,
			api_id: null,
			name: null,
			room_code: null,
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
            
    
    const set = function (unit) {
        let detail = _default_detail()
        if (unit) {
            detail.id = (unit.id)?unit.id:null
			detail.category_id = (unit.category_id)?unit.category_id:null
			detail.api_id = (unit.api_id)?unit.api_id:null
			detail.name = (unit.name)?unit.name:null
			detail.room_code = (unit.room_code)?unit.room_code:null
			detail.enabled = (unit.enabled)?unit.enabled:1
			detail.date_created = (unit.date_created)?unit.date_created:formatDateMySQL()
			detail.created_by = (unit.created_by)?unit.created_by:created_by
			detail.date_modified = (unit.date_modified)?unit.date_modified:formatDateMySQL()
			detail.modified_by = (unit.modified_by)?unit.modified_by:modified_by
			detail.note = (unit.note)?unit.note:null
        }
        
        Unit.detail = detail
        return detail
    }
    
    const load_all = function (units) {
        Unit.all = new Map()
    
        if (!units) {
            return
        }
        $.each(units, function (i, unit) {
            let detail = set(unit)
            Unit.all.set('id', detail)
        })
        
        console.log(' Unit.all',  Unit.all);
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

Unit.init()
//end object
