import { Schema, model } from 'mongoose';

const articlesSchema = new Schema({
    title: String,
    description: String,
    content: String,
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'Autor'
    },
    categories: [String],
    images: [String],
    datePub: Date,
    keywords: [String]
})

const Article = model('Article', articlesSchema);

export default Article;
