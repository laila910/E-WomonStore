// customerFirstName
// customerLastName
// customerEmail
// customerMobileNo
// customerPassword
// customerAddress
// customerCountry
// customerState
// customerZipCode
// customerCreditCard: enum["visa","discover","amex","mastercard"]
// customerCreditCardTypeId
// customerExpMonth
// customerExpYr
// customerCVC :"Card Verification Code"
// customerDateRegistered : Date with default new Date()


// add customer
// edit customer
// del customer
// get all customers
// show single customer
const app = require('./src/app')
app.listen(process.env.PORT, () => {
    console.log(`on localhost ${process.env.PORT}`)
})