    
const LoginAttempts = (function () {
    'use strict'
    
    const base_url = '/login_attempts'
    const _input_login_attempts_users_id = document.getElementById('input_login_attempts_users_id')
	const _input_login_attempts_time = document.getElementById('input_login_attempts_time')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_login_attempts_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            users_id: null,
			time: null
        }
    }
    
    const save = function(params){
    
    }
    
    
        const get = function(){
            let data_to_send = {}
            
        }  
        
    
    const set = function (login_attempts) {
        let detail = _default_detail()
        if (login_attempts) {
            detail.users_id = (login_attempts.users_id)?login_attempts.users_id:null
			detail.time = (login_attempts.time)?login_attempts.time:null
        }
        
        LoginAttempts.detail = detail
        return detail
    }
    
    const load_all = function (login_attempts) {
        LoginAttempts.all = new Map()
    
        if (!login_attempts) {
            return
        }
        $.each(login_attempts, function (i, login_attempts) {
            let detail = set(login_attempts)
            
        })
        
        console.log(' LoginAttempts.all',  LoginAttempts.all);
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

LoginAttempts.init()
//end object
