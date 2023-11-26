const mongoose= require("mongoose");

const couponSchema = mongoose.Schema({
  code:Number
}, {timestamps:true});
module.exports= mongoose.model("coupon", couponSchema)