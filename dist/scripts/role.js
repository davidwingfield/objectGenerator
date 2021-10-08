    
const Role = (function () {
    'use strict'
    
    const base_url = '/role'
    const _input_role_id = document.getElementById('input_role_id')
	const _input_role_name = document.getElementById('input_role_name')
	const _input_role_level = document.getElementById('input_role_level')
	const _input_role_enabled = document.getElementById('input_role_enabled')
	const _input_role_date_created = document.getElementById('input_role_date_created')
	const _input_role_created_by = document.getElementById('input_role_created_by')
	const _input_role_date_modified = document.getElementById('input_role_date_modified')
	const _input_role_modified_by = document.getElementById('input_role_modified_by')
	const _input_role_note = document.getElementById('input_role_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_role_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			name: null,
			level: null,
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
            
    
    const set = function (role) {
        let detail = _default_detail()
        if (role) {
            detail.id = (role.id)?role.id:null
			detail.name = (role.name)?role.name:null
			detail.level = (role.level)?role.level:null
			detail.enabled = (role.enabled)?role.enabled:1
			detail.date_created = (role.date_created)?role.date_created:formatDateMySQL()
			detail.created_by = (role.created_by)?role.created_by:created_by
			detail.date_modified = (role.date_modified)?role.date_modified:formatDateMySQL()
			detail.modified_by = (role.modified_by)?role.modified_by:modified_by
			detail.note = (role.note)?role.note:null
        }
        
        Role.detail = detail
        return detail
    }
    
    const load_all = function (roles) {
        Role.all = new Map()
    
        if (!roles) {
            return
        }
        $.each(roles, function (i, role) {
            let detail = set(role)
            Role.all.set('id', detail)
        })
        
        console.log(' Role.all',  Role.all);
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

Role.init()
//end object
