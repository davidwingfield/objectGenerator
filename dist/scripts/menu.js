    
const Menu = (function () {
    'use strict'
    
    const base_url = '/menu'
    const _input_menu_id = document.getElementById('input_menu_id')
	const _input_menu_label = document.getElementById('input_menu_label')
	const _input_menu_link_url = document.getElementById('input_menu_link_url')
	const _input_menu_parent_id = document.getElementById('input_menu_parent_id')
	const _input_menu_roles_min = document.getElementById('input_menu_roles_min')
	const _input_menu_icon = document.getElementById('input_menu_icon')
	const _input_menu_sort_order = document.getElementById('input_menu_sort_order')
	const _input_menu_enabled = document.getElementById('input_menu_enabled')
	const _input_menu_date_created = document.getElementById('input_menu_date_created')
	const _input_menu_created_by = document.getElementById('input_menu_created_by')
	const _input_menu_date_modified = document.getElementById('input_menu_date_modified')
	const _input_menu_modified_by = document.getElementById('input_menu_modified_by')
	const _input_menu_note = document.getElementById('input_menu_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_menu_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			label: null,
			link_url: null,
			parent_id: null,
			roles_min: null,
			icon: null,
			sort_order: null,
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
            
    
    const set = function (menu) {
        let detail = _default_detail()
        if (menu) {
            detail.id = (menu.id)?menu.id:null
			detail.label = (menu.label)?menu.label:null
			detail.link_url = (menu.link_url)?menu.link_url:null
			detail.parent_id = (menu.parent_id)?menu.parent_id:null
			detail.roles_min = (menu.roles_min)?menu.roles_min:null
			detail.icon = (menu.icon)?menu.icon:null
			detail.sort_order = (menu.sort_order)?menu.sort_order:null
			detail.enabled = (menu.enabled)?menu.enabled:1
			detail.date_created = (menu.date_created)?menu.date_created:formatDateMySQL()
			detail.created_by = (menu.created_by)?menu.created_by:created_by
			detail.date_modified = (menu.date_modified)?menu.date_modified:formatDateMySQL()
			detail.modified_by = (menu.modified_by)?menu.modified_by:modified_by
			detail.note = (menu.note)?menu.note:null
        }
        
        Menu.detail = detail
        return detail
    }
    
    const load_all = function (menus) {
        Menu.all = new Map()
    
        if (!menus) {
            return
        }
        $.each(menus, function (i, menu) {
            let detail = set(menu)
            Menu.all.set('id', detail)
        })
        
        console.log(' Menu.all',  Menu.all);
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

Menu.init()
//end object
