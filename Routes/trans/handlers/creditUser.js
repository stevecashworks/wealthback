const credit = require("../../../models/trans/credit");
const user = require("../../../models/users/user");

const creditUser=async(req,res,next)=>{
    const {wallet, amount}= req.body
   try {
     await credit.create(req.body)
     const newUserDetails= await user.findByIdAndUpdate(req.user.id,{$inc:{[wallet]:amount}},{new:true})
     return res.status(200).json({success:true,result:newUserDetails })
     
   } 
 catch (error) {
    console.log(error.message)
    res.status(500).json({success:false,result:error.message})
}
}
module.exports=creditUser