const nodemailer = require("nodemailer");

module.exports.email = async function email(to, mail_body, mail_html, subject){

  
    const transport = await nodemailer.createTransport({
        host:"smtp.mail.ru",
        port:465,
        auth:{
            user:"rustambek0301@mail.ru",
            pass:"UN6V8JJe42qY2yx26anB",
        },
    });

    return await transport.sendMail({
        form: `"Bizning kompaniya" <rustambek0301@mail.ru>`,
        to,
        subject,
        text:mail_body,
        html:mail_html,
    });  
};
