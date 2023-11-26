const createCustomError = require("../../../createCustomError");
const couponModel = require("../../../models/admin/coupon");
const getAllCodes= async(req,res,next)=>{
try {
     const codes=await couponModel.find()
     return res.status(200).json({success:true, result:codes})
} catch (error) {
    console.log(error.message)
    next(createCustomError(error.message))
}
}
module.exports = getAllCodes