import { connect } from 'mongoose';

const db_user = process.env.DB_USER
const db_password = process.env.DB_PASSWORD
const db_name = process.env.DB_NAME

const URI = `mongodb+srv://${db_user}:${db_password}@${db_name}.pngbmgw.mongodb.net/?retryWrites=true&w=majority`;

export const connectMongodb = async () => {
    await connect(URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(error => console.error(error));
}