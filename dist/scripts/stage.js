    
const Stage = (function () {
    'use strict'
    
    const base_url = '/stage'
    const _input_stage_id = document.getElementById('input_stage_id')
	const _input_stage_itinerary_id = document.getElementById('input_stage_itinerary_id')
	const _input_stage_stage = document.getElementById('input_stage_stage')
	const _input_stage_enabled = document.getElementById('input_stage_enabled')
	const _input_stage_date_created = document.getElementById('input_stage_date_created')
	const _input_stage_created_by = document.getElementById('input_stage_created_by')
	const _input_stage_date_modified = document.getElementById('input_stage_date_modified')
	const _input_stage_modified_by = document.getElementById('input_stage_modified_by')
	const _input_stage_note = document.getElementById('input_stage_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_stage_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			itinerary_id: null,
			stage: null,
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
            
    
    const set = function (stage) {
        let detail = _default_detail()
        if (stage) {
            detail.id = (stage.id)?stage.id:null
			detail.itinerary_id = (stage.itinerary_id)?stage.itinerary_id:null
			detail.stage = (stage.stage)?stage.stage:null
			detail.enabled = (stage.enabled)?stage.enabled:1
			detail.date_created = (stage.date_created)?stage.date_created:formatDateMySQL()
			detail.created_by = (stage.created_by)?stage.created_by:created_by
			detail.date_modified = (stage.date_modified)?stage.date_modified:formatDateMySQL()
			detail.modified_by = (stage.modified_by)?stage.modified_by:modified_by
			detail.note = (stage.note)?stage.note:null
        }
        
        Stage.detail = detail
        return detail
    }
    
    const load_all = function (stages) {
        Stage.all = new Map()
    
        if (!stages) {
            return
        }
        $.each(stages, function (i, stage) {
            let detail = set(stage)
            Stage.all.set('id', detail)
        })
        
        console.log(' Stage.all',  Stage.all);
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

Stage.init()
//end object
