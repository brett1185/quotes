const mongoose=require('mongoose')

mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, {

    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log(`You are connected to ${process.env.MY_DB}`)
    })
    .catch((err)=>{
        console.log(err)
    })