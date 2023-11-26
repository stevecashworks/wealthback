const WithdrawalSchema= require("../../../models/trans/withdrawals")
const UserSchema=require("../../../models/users/user")
const withdraw= async(req,res,next)=>{
 const { source, userId, amount } = req.body;
 try {
    const newUser= await UserSchema.findByIdAndUpdate(userId,{$inc:{[source]:(-1* amount)}})
    console.log(newUser)
    await WithdrawalSchema.create(req.body)
    res
      .status(200)
      .json({
        success: true,
        result: `request to  withdraw  ${amount} is being processed`,
      });
 
} catch (error) {
    res.status(500).json({sucess:false, result:error.message})
 }
}
module.exports=withdraw;