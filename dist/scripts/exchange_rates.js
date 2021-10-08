    
const ExchangeRates = (function () {
    'use strict'
    
    const base_url = '/exchange_rates'
    const _input_exchange_rates_client_id = document.getElementById('input_exchange_rates_client_id')
	const _input_exchange_rates_base_currency_id = document.getElementById('input_exchange_rates_base_currency_id')
	const _input_exchange_rates_exchange_currency_id = document.getElementById('input_exchange_rates_exchange_currency_id')
	const _input_exchange_rates_exchange_rate = document.getElementById('input_exchange_rates_exchange_rate')
	const _input_exchange_rates_enabled = document.getElementById('input_exchange_rates_enabled')
	const _input_exchange_rates_date_created = document.getElementById('input_exchange_rates_date_created')
	const _input_exchange_rates_created_by = document.getElementById('input_exchange_rates_created_by')
	const _input_exchange_rates_date_modified = document.getElementById('input_exchange_rates_date_modified')
	const _input_exchange_rates_modified_by = document.getElementById('input_exchange_rates_modified_by')
	const _input_exchange_rates_note = document.getElementById('input_exchange_rates_note')
    let user_id = (document.getElementById('user_id')) ? (!isNaN(parseInt(document.getElementById('user_id').value))) ? parseInt(document.getElementById('user_id').value) : 4 : 4
    
    
    const handle_exchange_rates_error = function (msg) {
            toastr.error(msg)
        }
        
    const _default_detail = function () {
        return {
            client_id: null,
			base_currency_id: null,
			exchange_currency_id: null,
			exchange_rate: null,
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
        
    
    const set = function (exchange_rates) {
        let detail = _default_detail()
        if (exchange_rates) {
            detail.client_id = (exchange_rates.client_id)?exchange_rates.client_id:null
			detail.base_currency_id = (exchange_rates.base_currency_id)?exchange_rates.base_currency_id:null
			detail.exchange_currency_id = (exchange_rates.exchange_currency_id)?exchange_rates.exchange_currency_id:null
			detail.exchange_rate = (exchange_rates.exchange_rate)?exchange_rates.exchange_rate:null
			detail.enabled = (exchange_rates.enabled)?exchange_rates.enabled:1
			detail.date_created = (exchange_rates.date_created)?exchange_rates.date_created:formatDateMySQL()
			detail.created_by = (exchange_rates.created_by)?exchange_rates.created_by:created_by
			detail.date_modified = (exchange_rates.date_modified)?exchange_rates.date_modified:formatDateMySQL()
			detail.modified_by = (exchange_rates.modified_by)?exchange_rates.modified_by:modified_by
			detail.note = (exchange_rates.note)?exchange_rates.note:null
        }
        
        ExchangeRates.detail = detail
        return detail
    }
    
    const load_all = function (exchange_rates) {
        ExchangeRates.all = new Map()
    
        if (!exchange_rates) {
            return
        }
        $.each(exchange_rates, function (i, exchange_rates) {
            let detail = set(exchange_rates)
            ExchangeRates.all.set(detail)
        })
        
        console.log(' ExchangeRates.all',  ExchangeRates.all);
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

ExchangeRates.init()
//end object
