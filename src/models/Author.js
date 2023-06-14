import { Schema, model } from 'mongoose';

const authorSchema = new Schema({
    name: String,
    lastName: String,
    email: String,
    photo: String,
    bio: String,
    webSite: String,
    donationAddress: {
        bankAccount: String,
        paymentMethod: String
    }
})

const Author = model('Author', authorSchema);

export default Author;