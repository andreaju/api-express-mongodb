const database  = require('mongoose')

database.connect(process.env.MONGO_URI,{useNewUrlParser:true, useUnifiedTopology:true}, (err)=>{
   if (err) console.log(err)
   console.log(`server connected to host ${process.env.MONGO_URI} ` )
})

module.exports = database