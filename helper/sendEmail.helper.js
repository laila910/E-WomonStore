const nodemailer = require('nodemailer')

const smtpConfig = {
    service: 'gmail',
    auth: {
        user: "li0693942@gmail.com",
        pass: 'laila_@LA'
    }
}

const sendEmailMe = (reciverEmail, textEmail) => {
    try {
        const transporter = nodemailer.createTransport(smtpConfig)
        let mailOptions = {
            from: "our app",
            to: reciverEmail,
            subject: "our sub",
            text: textEmail
        }
        transporter.sendMail(mailOptions)
    } catch (e) {
        console.log(e);
    }
}


module.exports = sendEmailMe