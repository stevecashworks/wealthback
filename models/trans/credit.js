const  mongoose=require("mongoose")
const creditSchema= mongoose.Schema({
  userId:{
    type:String,
    required:true
  },
  amount:{
    type:Number,
    required:true

  },
  description:{
    type:String,
    required:true
  },
   wallet:{
type:String,
required:true
  }
}, {timestamps:true})
module.exports= mongoose.model("credit",creditSchema)