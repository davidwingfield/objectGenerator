    
const User = (function () {
    'use strict'
    
    const base_url = '/user'
    const _input_user_Host = document.getElementById('input_user_Host')
	const _input_user_User = document.getElementById('input_user_User')
	const _input_user_Select_priv = document.getElementById('input_user_Select_priv')
	const _input_user_Insert_priv = document.getElementById('input_user_Insert_priv')
	const _input_user_Update_priv = document.getElementById('input_user_Update_priv')
	const _input_user_Delete_priv = document.getElementById('input_user_Delete_priv')
	const _input_user_Create_priv = document.getElementById('input_user_Create_priv')
	const _input_user_Drop_priv = document.getElementById('input_user_Drop_priv')
	const _input_user_Reload_priv = document.getElementById('input_user_Reload_priv')
	const _input_user_Shutdown_priv = document.getElementById('input_user_Shutdown_priv')
	const _input_user_Process_priv = document.getElementById('input_user_Process_priv')
	const _input_user_File_priv = document.getElementById('input_user_File_priv')
	const _input_user_Grant_priv = document.getElementById('input_user_Grant_priv')
	const _input_user_References_priv = document.getElementById('input_user_References_priv')
	const _input_user_Index_priv = document.getElementById('input_user_Index_priv')
	const _input_user_Alter_priv = document.getElementById('input_user_Alter_priv')
	const _input_user_Show_db_priv = document.getElementById('input_user_Show_db_priv')
	const _input_user_Super_priv = document.getElementById('input_user_Super_priv')
	const _input_user_Create_tmp_table_priv = document.getElementById('input_user_Create_tmp_table_priv')
	const _input_user_Lock_tables_priv = document.getElementById('input_user_Lock_tables_priv')
	const _input_user_Execute_priv = document.getElementById('input_user_Execute_priv')
	const _input_user_Repl_slave_priv = document.getElementById('input_user_Repl_slave_priv')
	const _input_user_Repl_client_priv = document.getElementById('input_user_Repl_client_priv')
	const _input_user_Create_view_priv = document.getElementById('input_user_Create_view_priv')
	const _input_user_Show_view_priv = document.getElementById('input_user_Show_view_priv')
	const _input_user_Create_routine_priv = document.getElementById('input_user_Create_routine_priv')
	const _input_user_Alter_routine_priv = document.getElementById('input_user_Alter_routine_priv')
	const _input_user_Create_user_priv = document.getElementById('input_user_Create_user_priv')
	const _input_user_Event_priv = document.getElementById('input_user_Event_priv')
	const _input_user_Trigger_priv = document.getElementById('input_user_Trigger_priv')
	const _input_user_Create_tablespace_priv = document.getElementById('input_user_Create_tablespace_priv')
	const _input_user_ssl_type = document.getElementById('input_user_ssl_type')
	const _input_user_ssl_cipher = document.getElementById('input_user_ssl_cipher')
	const _input_user_x509_issuer = document.getElementById('input_user_x509_issuer')
	const _input_user_x509_subject = document.getElementById('input_user_x509_subject')
	const _input_user_max_questions = document.getElementById('input_user_max_questions')
	const _input_user_max_updates = document.getElementById('input_user_max_updates')
	const _input_user_max_connections = document.getElementById('input_user_max_connections')
	const _input_user_max_user_connections = document.getElementById('input_user_max_user_connections')
	const _input_user_plugin = document.getElementById('input_user_plugin')
	const _input_user_authentication_string = document.getElementById('input_user_authentication_string')
	const _input_user_password_expired = document.getElementById('input_user_password_expired')
	const _input_user_password_last_changed = document.getElementById('input_user_password_last_changed')
	const _input_user_password_lifetime = document.getElementById('input_user_password_lifetime')
	const _input_user_account_locked = document.getElementById('input_user_account_locked')
	const _input_user_id = document.getElementById('input_user_id')
	const _input_user_role_id = document.getElementById('input_user_role_id')
	const _input_user_email = document.getElementById('input_user_email')
	const _input_user_name_first = document.getElementById('input_user_name_first')
	const _input_user_name_last = document.getElementById('input_user_name_last')
	const _input_user_username = document.getElementById('input_user_username')
	const _input_user_role = document.getElementById('input_user_role')
	const _input_user_pass = document.getElementById('input_user_pass')
	const _input_user_salt = document.getElementById('input_user_salt')
	const _input_user_enabled = document.getElementById('input_user_enabled')
	const _input_user_date_created = document.getElementById('input_user_date_created')
	const _input_user_created_by = document.getElementById('input_user_created_by')
	const _input_user_date_modified = document.getElementById('input_user_date_modified')
	const _input_user_modified_by = document.getElementById('input_user_modified_by')
	const _input_user_note = document.getElementById('input_user_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_user_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            Host: null,
			User: null,
			Select_priv: null,
			Insert_priv: null,
			Update_priv: null,
			Delete_priv: null,
			Create_priv: null,
			Drop_priv: null,
			Reload_priv: null,
			Shutdown_priv: null,
			Process_priv: null,
			File_priv: null,
			Grant_priv: null,
			References_priv: null,
			Index_priv: null,
			Alter_priv: null,
			Show_db_priv: null,
			Super_priv: null,
			Create_tmp_table_priv: null,
			Lock_tables_priv: null,
			Execute_priv: null,
			Repl_slave_priv: null,
			Repl_client_priv: null,
			Create_view_priv: null,
			Show_view_priv: null,
			Create_routine_priv: null,
			Alter_routine_priv: null,
			Create_user_priv: null,
			Event_priv: null,
			Trigger_priv: null,
			Create_tablespace_priv: null,
			ssl_type: null,
			ssl_cipher: null,
			x509_issuer: null,
			x509_subject: null,
			max_questions: null,
			max_updates: null,
			max_connections: null,
			max_user_connections: null,
			plugin: null,
			authentication_string: null,
			password_expired: null,
			password_last_changed: null,
			password_lifetime: null,
			account_locked: null,
			id: null,
			role_id: null,
			email: null,
			name_first: null,
			name_last: null,
			username: null,
			role: null,
			pass: null,
			salt: null,
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
    
    
        const get = function(){
            let data_to_send = {}
            
        }  
        
    
    const set = function (user) {
        let detail = _default_detail()
        if (user) {
            detail.Host = (user.Host)?user.Host:null
			detail.User = (user.User)?user.User:null
			detail.Select_priv = (user.Select_priv)?user.Select_priv:null
			detail.Insert_priv = (user.Insert_priv)?user.Insert_priv:null
			detail.Update_priv = (user.Update_priv)?user.Update_priv:null
			detail.Delete_priv = (user.Delete_priv)?user.Delete_priv:null
			detail.Create_priv = (user.Create_priv)?user.Create_priv:null
			detail.Drop_priv = (user.Drop_priv)?user.Drop_priv:null
			detail.Reload_priv = (user.Reload_priv)?user.Reload_priv:null
			detail.Shutdown_priv = (user.Shutdown_priv)?user.Shutdown_priv:null
			detail.Process_priv = (user.Process_priv)?user.Process_priv:null
			detail.File_priv = (user.File_priv)?user.File_priv:null
			detail.Grant_priv = (user.Grant_priv)?user.Grant_priv:null
			detail.References_priv = (user.References_priv)?user.References_priv:null
			detail.Index_priv = (user.Index_priv)?user.Index_priv:null
			detail.Alter_priv = (user.Alter_priv)?user.Alter_priv:null
			detail.Show_db_priv = (user.Show_db_priv)?user.Show_db_priv:null
			detail.Super_priv = (user.Super_priv)?user.Super_priv:null
			detail.Create_tmp_table_priv = (user.Create_tmp_table_priv)?user.Create_tmp_table_priv:null
			detail.Lock_tables_priv = (user.Lock_tables_priv)?user.Lock_tables_priv:null
			detail.Execute_priv = (user.Execute_priv)?user.Execute_priv:null
			detail.Repl_slave_priv = (user.Repl_slave_priv)?user.Repl_slave_priv:null
			detail.Repl_client_priv = (user.Repl_client_priv)?user.Repl_client_priv:null
			detail.Create_view_priv = (user.Create_view_priv)?user.Create_view_priv:null
			detail.Show_view_priv = (user.Show_view_priv)?user.Show_view_priv:null
			detail.Create_routine_priv = (user.Create_routine_priv)?user.Create_routine_priv:null
			detail.Alter_routine_priv = (user.Alter_routine_priv)?user.Alter_routine_priv:null
			detail.Create_user_priv = (user.Create_user_priv)?user.Create_user_priv:null
			detail.Event_priv = (user.Event_priv)?user.Event_priv:null
			detail.Trigger_priv = (user.Trigger_priv)?user.Trigger_priv:null
			detail.Create_tablespace_priv = (user.Create_tablespace_priv)?user.Create_tablespace_priv:null
			detail.ssl_type = (user.ssl_type)?user.ssl_type:null
			detail.ssl_cipher = (user.ssl_cipher)?user.ssl_cipher:null
			detail.x509_issuer = (user.x509_issuer)?user.x509_issuer:null
			detail.x509_subject = (user.x509_subject)?user.x509_subject:null
			detail.max_questions = (user.max_questions)?user.max_questions:null
			detail.max_updates = (user.max_updates)?user.max_updates:null
			detail.max_connections = (user.max_connections)?user.max_connections:null
			detail.max_user_connections = (user.max_user_connections)?user.max_user_connections:null
			detail.plugin = (user.plugin)?user.plugin:null
			detail.authentication_string = (user.authentication_string)?user.authentication_string:null
			detail.password_expired = (user.password_expired)?user.password_expired:null
			detail.password_last_changed = (user.password_last_changed)?user.password_last_changed:null
			detail.password_lifetime = (user.password_lifetime)?user.password_lifetime:null
			detail.account_locked = (user.account_locked)?user.account_locked:null
			detail.id = (user.id)?user.id:null
			detail.role_id = (user.role_id)?user.role_id:null
			detail.email = (user.email)?user.email:null
			detail.name_first = (user.name_first)?user.name_first:null
			detail.name_last = (user.name_last)?user.name_last:null
			detail.username = (user.username)?user.username:null
			detail.role = (user.role)?user.role:null
			detail.pass = (user.pass)?user.pass:null
			detail.salt = (user.salt)?user.salt:null
			detail.enabled = (user.enabled)?user.enabled:1
			detail.date_created = (user.date_created)?user.date_created:formatDateMySQL()
			detail.created_by = (user.created_by)?user.created_by:created_by
			detail.date_modified = (user.date_modified)?user.date_modified:formatDateMySQL()
			detail.modified_by = (user.modified_by)?user.modified_by:modified_by
			detail.note = (user.note)?user.note:null
        }
        
        User.detail = detail
        return detail
    }
    
    const load_all = function (users) {
        User.all = new Map()
    
        if (!users) {
            return
        }
        $.each(users, function (i, user) {
            let detail = set(user)
            User.all.set(detail)
        })
        
        console.log(' User.all',  User.all);
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

User.init()
//end object
