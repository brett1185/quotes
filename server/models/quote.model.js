const mongoose = require('mongoose')

const QuoteSchema = new mongoose.Schema({
    quoteText:{
        type:String,
        require:[true, 'Must Enter a quote!'],
        minLength:[5, 'Quote must have at least 5 characters!']
    },
    author:{
        type:String,
        require:[true, 'Quote must have an author!'],
        minLength:[5, 'Author must have at least 5 characters!']
    },
    subject:{
        type:String,
        require:[true, 'Must assign subject to quote!']
    }
}, {timestamps:true})

const Quote = mongoose.model('Quote', QuoteSchema)

module.exports = Quote