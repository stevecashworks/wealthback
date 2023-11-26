const mongoose= require("mongoose")
const postSchema = mongoose.Schema({
  userName:{
    type:String,
    required:true
  },
  img: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
}, {timestamps:true});

module.exports= mongoose.model("Posts", postSchema)