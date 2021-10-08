    
const Page = (function () {
    'use strict'
    
    const base_url = '/page'
    const _input_page_id = document.getElementById('input_page_id')
	const _input_page_menu_id = document.getElementById('input_page_menu_id')
	const _input_page_path = document.getElementById('input_page_path')
	const _input_page_title = document.getElementById('input_page_title')
	const _input_page_sub_title = document.getElementById('input_page_sub_title')
	const _input_page_heading = document.getElementById('input_page_heading')
	const _input_page_sub_heading = document.getElementById('input_page_sub_heading')
	const _input_page_description = document.getElementById('input_page_description')
	const _input_page_keywords = document.getElementById('input_page_keywords')
	const _input_page_enabled = document.getElementById('input_page_enabled')
	const _input_page_date_created = document.getElementById('input_page_date_created')
	const _input_page_created_by = document.getElementById('input_page_created_by')
	const _input_page_date_modified = document.getElementById('input_page_date_modified')
	const _input_page_modified_by = document.getElementById('input_page_modified_by')
	const _input_page_note = document.getElementById('input_page_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_page_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			menu_id: null,
			path: null,
			title: null,
			sub_title: null,
			heading: null,
			sub_heading: null,
			description: null,
			keywords: null,
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
            
    
    const set = function (page) {
        let detail = _default_detail()
        if (page) {
            detail.id = (page.id)?page.id:null
			detail.menu_id = (page.menu_id)?page.menu_id:null
			detail.path = (page.path)?page.path:null
			detail.title = (page.title)?page.title:null
			detail.sub_title = (page.sub_title)?page.sub_title:null
			detail.heading = (page.heading)?page.heading:null
			detail.sub_heading = (page.sub_heading)?page.sub_heading:null
			detail.description = (page.description)?page.description:null
			detail.keywords = (page.keywords)?page.keywords:null
			detail.enabled = (page.enabled)?page.enabled:1
			detail.date_created = (page.date_created)?page.date_created:formatDateMySQL()
			detail.created_by = (page.created_by)?page.created_by:created_by
			detail.date_modified = (page.date_modified)?page.date_modified:formatDateMySQL()
			detail.modified_by = (page.modified_by)?page.modified_by:modified_by
			detail.note = (page.note)?page.note:null
        }
        
        Page.detail = detail
        return detail
    }
    
    const load_all = function (pages) {
        Page.all = new Map()
    
        if (!pages) {
            return
        }
        $.each(pages, function (i, page) {
            let detail = set(page)
            Page.all.set('id', detail)
        })
        
        console.log(' Page.all',  Page.all);
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

Page.init()
//end object
