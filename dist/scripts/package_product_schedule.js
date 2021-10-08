    
const PackageProductSchedule = (function () {
    'use strict'
    
    const base_url = '/package_product_schedule'
    const _input_package_product_schedule_id = document.getElementById('input_package_product_schedule_id')
	const _input_package_product_schedule_package_id = document.getElementById('input_package_product_schedule_package_id')
	const _input_package_product_schedule_package_product_id = document.getElementById('input_package_product_schedule_package_product_id')
	const _input_package_product_schedule_day = document.getElementById('input_package_product_schedule_day')
	const _input_package_product_schedule_start = document.getElementById('input_package_product_schedule_start')
	const _input_package_product_schedule_stop = document.getElementById('input_package_product_schedule_stop')
	const _input_package_product_schedule_date = document.getElementById('input_package_product_schedule_date')
	const _input_package_product_schedule_all_day = document.getElementById('input_package_product_schedule_all_day')
	const _input_package_product_schedule_enabled = document.getElementById('input_package_product_schedule_enabled')
	const _input_package_product_schedule_date_created = document.getElementById('input_package_product_schedule_date_created')
	const _input_package_product_schedule_created_by = document.getElementById('input_package_product_schedule_created_by')
	const _input_package_product_schedule_date_modified = document.getElementById('input_package_product_schedule_date_modified')
	const _input_package_product_schedule_modified_by = document.getElementById('input_package_product_schedule_modified_by')
	const _input_package_product_schedule_note = document.getElementById('input_package_product_schedule_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_package_product_schedule_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			package_id: null,
			package_product_id: null,
			day: null,
			start: null,
			stop: null,
			date: null,
			all_day: 1,
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
            
    
    const set = function (package_product_schedule) {
        let detail = _default_detail()
        if (package_product_schedule) {
            detail.id = (package_product_schedule.id)?package_product_schedule.id:null
			detail.package_id = (package_product_schedule.package_id)?package_product_schedule.package_id:null
			detail.package_product_id = (package_product_schedule.package_product_id)?package_product_schedule.package_product_id:null
			detail.day = (package_product_schedule.day)?package_product_schedule.day:null
			detail.start = (package_product_schedule.start)?package_product_schedule.start:null
			detail.stop = (package_product_schedule.stop)?package_product_schedule.stop:null
			detail.date = (package_product_schedule.date)?package_product_schedule.date:null
			detail.all_day = (package_product_schedule.all_day)?package_product_schedule.all_day:1
			detail.enabled = (package_product_schedule.enabled)?package_product_schedule.enabled:1
			detail.date_created = (package_product_schedule.date_created)?package_product_schedule.date_created:formatDateMySQL()
			detail.created_by = (package_product_schedule.created_by)?package_product_schedule.created_by:created_by
			detail.date_modified = (package_product_schedule.date_modified)?package_product_schedule.date_modified:formatDateMySQL()
			detail.modified_by = (package_product_schedule.modified_by)?package_product_schedule.modified_by:modified_by
			detail.note = (package_product_schedule.note)?package_product_schedule.note:null
        }
        
        PackageProductSchedule.detail = detail
        return detail
    }
    
    const load_all = function (package_product_schedules) {
        PackageProductSchedule.all = new Map()
    
        if (!package_product_schedules) {
            return
        }
        $.each(package_product_schedules, function (i, package_product_schedule) {
            let detail = set(package_product_schedule)
            PackageProductSchedule.all.set('id', detail)
        })
        
        console.log(' PackageProductSchedule.all',  PackageProductSchedule.all);
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

PackageProductSchedule.init()
//end object
