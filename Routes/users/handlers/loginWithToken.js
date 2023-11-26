const createCustomError= require("../../../createCustomError.js")
const userModel= require("../../../models/users/user.js")
const loginWithToken=async(req,res,next)=>{
 try {
    const  {id}= req.user
    const thisUser = await userModel.findById(id);
    if(thisUser){
        return res.status(200).json({success:true,result:thisUser})
    }
    else{
     return res.status(404).json({
       success: false,
       result: "An error occured while trying to process user details",
     });

    }
    
    
 } catch (error) {
    console.log(error.mesage)
    next(createCustomError(error.message))
 }    
}
module.exports=loginWithToken