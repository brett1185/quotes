const QuoteController = require('../controllers/quote.controller')
const {authenticate} = require("../config/jwt.config")

module.exports =(app)=>{
    app.post ('/api/quotes', QuoteController.createQuote)
    app.get('/api/quotes',QuoteController.getAllQuotes)
    app.get('/api/quotes/:id', QuoteController.getQuote)
    app.put('/api/quotes/:id', QuoteController.updateQuote)
    app.delete('/api/quotes/:id',QuoteController.deleteQuote)
}