const mongoose= require("mongoose")
const dataSubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  network: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  wallet: {
    type: String,
    enum: [],
  },
});
module.exports = mongoose.model("dataSubs", dataSubSchema);