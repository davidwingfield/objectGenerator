    
const Profile = (function () {
    'use strict'
    
    const base_url = '/profile'
    const _input_profile_id = document.getElementById('input_profile_id')
	const _input_profile_name = document.getElementById('input_profile_name')
	const _input_profile_sale_type_id = document.getElementById('input_profile_sale_type_id')
	const _input_profile_qty = document.getElementById('input_profile_qty')
	const _input_profile_expires = document.getElementById('input_profile_expires')
	const _input_profile_transfer_sale_type_id = document.getElementById('input_profile_transfer_sale_type_id')
	const _input_profile_release_amt = document.getElementById('input_profile_release_amt')
	const _input_profile_min_length_days = document.getElementById('input_profile_min_length_days')
	const _input_profile_checkin_dow = document.getElementById('input_profile_checkin_dow')
	const _input_profile_checkout_dow = document.getElementById('input_profile_checkout_dow')
	const _input_profile_departure_dow = document.getElementById('input_profile_departure_dow')
	const _input_profile_return_dow = document.getElementById('input_profile_return_dow')
	const _input_profile_inc_days_dow = document.getElementById('input_profile_inc_days_dow')
	const _input_profile_min_duration = document.getElementById('input_profile_min_duration')
	const _input_profile_max_duration = document.getElementById('input_profile_max_duration')
	const _input_profile_equal_duration = document.getElementById('input_profile_equal_duration')
	const _input_profile_advanced_booking_min = document.getElementById('input_profile_advanced_booking_min')
	const _input_profile_advanced_booking_max = document.getElementById('input_profile_advanced_booking_max')
	const _input_profile_advanced_booking_date = document.getElementById('input_profile_advanced_booking_date')
	const _input_profile_weekday_dow = document.getElementById('input_profile_weekday_dow')
	const _input_profile_allot_by = document.getElementById('input_profile_allot_by')
	const _input_profile_days_out = document.getElementById('input_profile_days_out')
	const _input_profile_enabled = document.getElementById('input_profile_enabled')
	const _input_profile_date_created = document.getElementById('input_profile_date_created')
	const _input_profile_created_by = document.getElementById('input_profile_created_by')
	const _input_profile_date_modified = document.getElementById('input_profile_date_modified')
	const _input_profile_modified_by = document.getElementById('input_profile_modified_by')
	const _input_profile_note = document.getElementById('input_profile_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_profile_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            id: null,
			name: null,
			sale_type_id: null,
			qty: null,
			expires: null,
			transfer_sale_type_id: null,
			release_amt: null,
			min_length_days: null,
			checkin_dow: null,
			checkout_dow: null,
			departure_dow: null,
			return_dow: null,
			inc_days_dow: null,
			min_duration: null,
			max_duration: null,
			equal_duration: null,
			advanced_booking_min: null,
			advanced_booking_max: null,
			advanced_booking_date: null,
			weekday_dow: null,
			allot_by: null,
			days_out: null,
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
            
    
    const set = function (profile) {
        let detail = _default_detail()
        if (profile) {
            detail.id = (profile.id)?profile.id:null
			detail.name = (profile.name)?profile.name:null
			detail.sale_type_id = (profile.sale_type_id)?profile.sale_type_id:null
			detail.qty = (profile.qty)?profile.qty:null
			detail.expires = (profile.expires)?profile.expires:null
			detail.transfer_sale_type_id = (profile.transfer_sale_type_id)?profile.transfer_sale_type_id:null
			detail.release_amt = (profile.release_amt)?profile.release_amt:null
			detail.min_length_days = (profile.min_length_days)?profile.min_length_days:null
			detail.checkin_dow = (profile.checkin_dow)?profile.checkin_dow:null
			detail.checkout_dow = (profile.checkout_dow)?profile.checkout_dow:null
			detail.departure_dow = (profile.departure_dow)?profile.departure_dow:null
			detail.return_dow = (profile.return_dow)?profile.return_dow:null
			detail.inc_days_dow = (profile.inc_days_dow)?profile.inc_days_dow:null
			detail.min_duration = (profile.min_duration)?profile.min_duration:null
			detail.max_duration = (profile.max_duration)?profile.max_duration:null
			detail.equal_duration = (profile.equal_duration)?profile.equal_duration:null
			detail.advanced_booking_min = (profile.advanced_booking_min)?profile.advanced_booking_min:null
			detail.advanced_booking_max = (profile.advanced_booking_max)?profile.advanced_booking_max:null
			detail.advanced_booking_date = (profile.advanced_booking_date)?profile.advanced_booking_date:null
			detail.weekday_dow = (profile.weekday_dow)?profile.weekday_dow:null
			detail.allot_by = (profile.allot_by)?profile.allot_by:null
			detail.days_out = (profile.days_out)?profile.days_out:null
			detail.enabled = (profile.enabled)?profile.enabled:1
			detail.date_created = (profile.date_created)?profile.date_created:formatDateMySQL()
			detail.created_by = (profile.created_by)?profile.created_by:created_by
			detail.date_modified = (profile.date_modified)?profile.date_modified:formatDateMySQL()
			detail.modified_by = (profile.modified_by)?profile.modified_by:modified_by
			detail.note = (profile.note)?profile.note:null
        }
        
        Profile.detail = detail
        return detail
    }
    
    const load_all = function (profiles) {
        Profile.all = new Map()
    
        if (!profiles) {
            return
        }
        $.each(profiles, function (i, profile) {
            let detail = set(profile)
            Profile.all.set('id', detail)
        })
        
        console.log(' Profile.all',  Profile.all);
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

Profile.init()
//end object
