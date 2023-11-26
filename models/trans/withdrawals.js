const mongoose= require("mongoose")

const WithdrawalSchema = mongoose.Schema({
  bank: {
    type: String,
    required: true,
  },
  accountName: {
    type: "String",
    required: true,
  },
  accountNumber: {
    type: "String",
    required: true,
  },
  email: {
    type: String,
  },
  amount:{
type:String,
required:true
  },
  
  status: {
    type: String,
    enum: ["pending", "rejected", "approved"],
    default: "pending",
  },
  source: {
    type: String,
    require: true,
  },
  userId: {
    type: String,
    required: true,
  },
}, {timestamps:true});
module.exports = mongoose.model("withdrawals",WithdrawalSchema)

