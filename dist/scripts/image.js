    
const Image = (function () {
    'use strict'
    
    const base_url = '/image'
    const _input_image_id = document.getElementById('input_image_id')
	const _input_image_name = document.getElementById('input_image_name')
	const _input_image_path = document.getElementById('input_image_path')
	const _input_image_extension = document.getElementById('input_image_extension')
	const _input_image_dimensions = document.getElementById('input_image_dimensions')
	const _input_image_size = document.getElementById('input_image_size')
	const _input_image_height = document.getElementById('input_image_height')
	const _input_image_width = document.getElementById('input_image_width')
	const _input_image_enabled = document.getElementById('input_image_enabled')
	const _input_image_date_created = document.getElementById('input_image_date_created')
	const _input_image_created_by = document.getElementById('input_image_created_by')
	const _input_image_date_modified = document.getElementById('input_image_date_modified')
	const _input_image_modified_by = document.getElementById('input_image_modified_by')
	const _input_image_note = document.getElementById('input_image_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_image_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			name: null,
			path: null,
			extension: null,
			dimensions: null,
			size: null,
			height: null,
			width: null,
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
            
    
    const set = function (image) {
        let detail = _default_detail()
        if (image) {
            detail.id = (image.id)?image.id:null
			detail.name = (image.name)?image.name:null
			detail.path = (image.path)?image.path:null
			detail.extension = (image.extension)?image.extension:null
			detail.dimensions = (image.dimensions)?image.dimensions:null
			detail.size = (image.size)?image.size:null
			detail.height = (image.height)?image.height:null
			detail.width = (image.width)?image.width:null
			detail.enabled = (image.enabled)?image.enabled:1
			detail.date_created = (image.date_created)?image.date_created:formatDateMySQL()
			detail.created_by = (image.created_by)?image.created_by:created_by
			detail.date_modified = (image.date_modified)?image.date_modified:formatDateMySQL()
			detail.modified_by = (image.modified_by)?image.modified_by:modified_by
			detail.note = (image.note)?image.note:null
        }
        
        Image.detail = detail
        return detail
    }
    
    const load_all = function (images) {
        Image.all = new Map()
    
        if (!images) {
            return
        }
        $.each(images, function (i, image) {
            let detail = set(image)
            Image.all.set('id', detail)
        })
        
        console.log(' Image.all',  Image.all);
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

Image.init()
//end object
