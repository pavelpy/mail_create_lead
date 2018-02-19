odoo.define('mail_create_lead.create_lead', function (require) {
"use strict";

var core = require('web.core');
var chat_manager = require('mail.chat_manager');
var rpc = require('web.rpc');
require('web.dom_ready');

var ChatAction = core.action_registry.get('mail.chat.instant_messaging');

ChatAction.include({
    _selectMessage: function (message_id) {
        // FIXME: call create lead method
        // rpc.query({
        //     model: 'crm.lead',
        //     method: 'create_opp_portal',
        //     args: [{
        //         contact_name: 'test1',
        //         title: 'test2',
        //         description: 'test3',
        //     }],
        // })
        // .done(function(response){
        //     if (response.errors) {
        //         console.log('errrrrrrrror')
        //     }
        //     else {
        //         window.location = '/my/opportunity/' + response.id;
        //     }
        // })
        // .fail(function() {
        //
        // });
    },

    _onPostMessage: function (message) {

    }
});

return chat_manager;

});
