import { Schema, model } from 'mongoose';

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

const Autor = model('Autor', autorSchema);

export default Autor;