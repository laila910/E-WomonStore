const nodemailer = require('nodemailer')
const smtpConfig = {
    service: "gmail",
    auth: {
        user: "li0693942@gmail.com",
        password: "Laila45##"
    }
}

const sendEmailMe = async(reciverEmail, txtEmail) => {
    try {
        const transporter = await nodemailer.createTransport(smtpConfig)
        let mailOptions = {
            from: "our app",
            to: reciverEmail,
            subject: "ourSub",
            text: txtEmail
        }
        await transporter.sendMail(mailOptions)
    } catch (e) {
        console.log(e)
    }

}

module.exports = sendEmailMe