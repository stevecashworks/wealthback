const mongoose= require("mongoose")
const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    coupon: {
      type: String,
      default: "none",
    },

    ref: {
      type: String,
      default: "none",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    refferals: {
      type: Array,
      default: [],
    },
    activities: [
      {
        description: String,
        time: Date,
        amountEarned:Number
      },
    ],
    activityEarning: {
      type: Number,
      default: 0,
    },
    refferalEarning: {
      type: Number,
      default: 0,
    },
    refCode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", UserSchema);