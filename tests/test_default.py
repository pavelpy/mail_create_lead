# -*- coding: utf-8 -*-
import odoo.tests


@odoo.tests.common.at_install(False)
@odoo.tests.common.post_install(True)
class TestUi(odoo.tests.HttpCase):

    def test_01_mail_all(self):
        # wait till page loaded and then check button count
        code = """
            setTimeout(function () {
                var create_lead_button = $('.o_mail_info:not(:has(.o_document_link))').find(".fa.fa-arrow-circle-o-up.o_thread_icon.o_thread_message_reply");
                if (create_lead_button.length === 0) {
                    console.log('error');
                }
    
            }, 1000);
        """
        link = '/web#action=%s' % self.ref('mail.mail_channel_action_client_chat')
        self.phantom_js(link, code, "odoo.__DEBUG__.services['mail_create_lead.create_lead']", login="admin")
