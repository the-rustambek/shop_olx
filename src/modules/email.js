const nodemailer = require("nodemailer");

module.exports.email = async function email(to, mail_body, mail_html, subject){
    const transport = await nodemailer.createTransport({
        host:"smtp.yandex.ru",
        port:465,
        secure:true,
        auth:{
            user:"Rustambek0103",
            pass:"alcaxldzllaoolcc",
        },
    });

    return await transport.sendMail({
        form: `"Bizning kompaniya" <Rustambek0301@yandex.ru>`,
        to,
        subject,
        text:mail_body,
        html:mail_html,
    })

}