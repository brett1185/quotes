const Quote = require('../models/quote.model')

module.exports = {
    createQuote:(req, res)=>{
        Quote.create(req.body)
        .then((newQuote)=>{
            console.log(newQuote)
            res.json(newQuote)
        })
        .catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },
    getAllQuotes:(req, res)=>{
        Quote.find()
        .then((quotes)=>{
            console.log(quotes)
            res.json(quotes)
        })
        .catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },
    getQuote:(req, res)=>{
        Quote.findOne({_id:req.params.id})
        .then((quote)=>{
            console.log(quote)
            res.json(quote)
        })
        .catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },
    updateQuote:(req, res)=>{
        Quote.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
        .then((updatedQuote)=>{
            console.log(updatedQuote)
            res.json(updatedQuote)
        })
        .catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },
    deleteQuote:(req, res)=>{
        Quote.deleteOne({_id:req.params.id})
        .then((deletedQuote)=>{
            console.log(deletedQuote)
            res.json(deletedQuote)
        })
        .catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    }
}