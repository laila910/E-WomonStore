const nodemailer = require('nodemailer')
const smtpConfig = {
    service: "gmail",
    auth: {
        user: "li0693942@gmail.com",
        pass: "Laila45##"
    }
}

const sendEmailMe = (reciverEmail, txtEmail) => {
    try {
        const transporter = nodemailer.createTransport(smtpConfig)
        let mailOptions = {
            from: "our app",
            to: reciverEmail,
            subject: "ourSub",
            text: txtEmail
        }
        transporter.sendMail(mailOptions)
    } catch (e) {
        console.log(e)
    }

}

module.exports = sendEmailMe