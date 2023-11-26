const createCustomError = require("../../../createCustomError.js");
const couponModel= require("../../../models/admin/coupon.js")
const getCode=()=>{
    let str=""
    const digs= "123456789"
    for(let i=0; i<6;i++){
        str += digs[Math.floor(Math.random() *digs.length)];
    }
    return str
    
}


const createCouponCode=async(req,res,next)=>{
    try {
        const newCode = await couponModel.create({ code:getCode()});
        return res.status(200).json({success:true,result:newCode})
    } catch (error) {
        console.log(error.message)
        next(createCustomError(error))
    }
}
module.exports= createCouponCode