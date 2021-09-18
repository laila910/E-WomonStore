// add customer
// edit customer
// del customer
// get all customers
// show single customer
const app = require('./src/app')
app.listen(process.env.PORT, () => {
    console.log(`on localhost ${process.env.PORT}`)
})