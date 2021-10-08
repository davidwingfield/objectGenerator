    
const Traveler = (function () {
    'use strict'
    
    const base_url = '/traveler'
    const _input_traveler_id = document.getElementById('input_traveler_id')
	const _input_traveler_address_id = document.getElementById('input_traveler_address_id')
	const _input_traveler_first_name = document.getElementById('input_traveler_first_name')
	const _input_traveler_last_name = document.getElementById('input_traveler_last_name')
	const _input_traveler_birthday = document.getElementById('input_traveler_birthday')
	const _input_traveler_enabled = document.getElementById('input_traveler_enabled')
	const _input_traveler_date_created = document.getElementById('input_traveler_date_created')
	const _input_traveler_created_by = document.getElementById('input_traveler_created_by')
	const _input_traveler_date_modified = document.getElementById('input_traveler_date_modified')
	const _input_traveler_modified_by = document.getElementById('input_traveler_modified_by')
	const _input_traveler_note = document.getElementById('input_traveler_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_traveler_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			address_id: null,
			first_name: null,
			last_name: null,
			birthday: null,
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
            
    
    const set = function (traveler) {
        let detail = _default_detail()
        if (traveler) {
            detail.id = (traveler.id)?traveler.id:null
			detail.address_id = (traveler.address_id)?traveler.address_id:null
			detail.first_name = (traveler.first_name)?traveler.first_name:null
			detail.last_name = (traveler.last_name)?traveler.last_name:null
			detail.birthday = (traveler.birthday)?traveler.birthday:null
			detail.enabled = (traveler.enabled)?traveler.enabled:1
			detail.date_created = (traveler.date_created)?traveler.date_created:formatDateMySQL()
			detail.created_by = (traveler.created_by)?traveler.created_by:created_by
			detail.date_modified = (traveler.date_modified)?traveler.date_modified:formatDateMySQL()
			detail.modified_by = (traveler.modified_by)?traveler.modified_by:modified_by
			detail.note = (traveler.note)?traveler.note:null
        }
        
        Traveler.detail = detail
        return detail
    }
    
    const load_all = function (travelers) {
        Traveler.all = new Map()
    
        if (!travelers) {
            return
        }
        $.each(travelers, function (i, traveler) {
            let detail = set(traveler)
            Traveler.all.set('id', detail)
        })
        
        console.log(' Traveler.all',  Traveler.all);
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

Traveler.init()
//end object
