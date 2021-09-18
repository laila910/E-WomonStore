const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/estore')

const Customer = new mongoose.model('Customer', {
    customerFirstName: {
        type: String
    },
    customerLastName: {
        type: String
    }
})

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
myData = new Customer({ customerFirstName: "laila", customerLastName: "Ibrahim" })
myData.save().then(() => console.log(myData)).catch(e => console.log(e))