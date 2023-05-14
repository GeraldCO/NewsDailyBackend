const { Schema, model } = require('mongoose')

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

module.exports = model('Article', articlesSchema)
