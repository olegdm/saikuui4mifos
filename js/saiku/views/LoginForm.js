/*  
 *   Copyright 2012 OSBI Ltd
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */
 
/**
 * The login prompt on startup
 */
var LoginForm = Modal.extend({
    type: "login",
    message: "",

    buttons: [
        { text: "Login", method: "login" }
    ],

    events: {
        'click a': 'call',
        'keyup #login_form input': 'check'
    },

    initialize: function(args) {
        _.extend(this, args);
        _.bindAll(this, "adjust");
        this.options.title = Settings.VERSION;
        this.bind('open', this.adjust);
        $(this.el).dialog('close');

    },

    adjust: function() {
        /* $(this.el).parent().find('.ui-dialog-titlebar-close').hide();
         $(this.el).find("#username").select().focus();*/
        $(this.el).dialog('close');
    },
    check: function(event) {
        if(event.which === 13) {
            this.login();
        }
        $(this.el).dialog('close');
    },

    login: function() {
//        jQuery.ajax({
//                url:"credentials.json",
//                success:function(result){
//                    var l_username = result.username;
//                    var l_password = result.password;
//                }
//            }
//        );
        $(this.el).dialog('close');
        this.session.login("admin", "admin");

        return true;
    }
});
