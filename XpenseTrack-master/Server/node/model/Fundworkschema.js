const mongoose = require('mongoose')


const FundSchema = new mongoose.Schema({
  purpose:{
    type:String,
    required:true
  },
  username: {
    type:String,
    required:true
  },
  cashiername:{
    type: String,
    required:true
  },
  place:{
    type:String,
    required:true
  },
  date:{
     type:Date,
      required:true
  },
  amount:{
    type:Number,
  }
})

module.exports = Funddetail = mongoose.model('funddetails', FundSchema)
