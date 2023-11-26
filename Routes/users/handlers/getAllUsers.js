const createCustomError = require("../../../createCustomError")
const userModel= require("../../../models/users/user")


const getAllUsers=async(req,res,next)=>{
 try {
    
     const allUsers = await userModel.find();
    return res.status(200).json({success:true, result: allUsers})
 } catch (error) {
    next(createCustomError(error.message))
 }
}
module.exports=getAllUsers
