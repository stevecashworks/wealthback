const createCustomError = require("../../../createCustomError.js")
const userModel= require("../../../models/users/user.js")
const getSuffix=require("../getSuffix.js")
const dotenv=require("dotenv")
const  coupons= require("../../../models/admin/coupon.js")
const jwt= require("jsonwebtoken")
dotenv.config()
const register=async(req,res,next)=>{
    
try{
 const {ref} = req.body;
 const {coupon}= req.body
 const referrer= await userModel.findOne({refCode:ref})
 
 const suffix=getSuffix()
 const newUser = await userModel.create({
   ...req.body,
   refCode: req.body.userName+suffix
  });
  await coupons.findOneAndDelete({code:coupon})
const token= await jwt.sign({id:newUser._id, isAdmin:newUser.isAdmin}, process.env.jwt_pass)
if (referrer) {
  await userModel.findByIdAndUpdate(referrer._id,
    {
      $inc:{
        refferalEarning:500
      },
      $addToSet:{
        refferals:newUser._id
      }
    });
  } else {
  res.status(201).json({success:true, result:{...newUser._doc,token}})
  console.log("no user exists with this refcode");
}

}
catch(err){
    next(createCustomError(err.message))
}
}
module.exports= register