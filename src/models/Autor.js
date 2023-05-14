const { Schema, model } = require('mongoose')

const autorSchema = new Schema({
    name: String,
    lasName: String,
    email: String,
    photo: String,
    bio: String,
    webSite: String,
    donationAddress: {
        bankAccount: String,
        paymentMethod: String
    }
})

module.exports = model('Autor', autorSchema)