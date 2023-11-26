const usermodel = require("../../../models/users/user");
const createCustomError=require("../../../createCustomError")
const jwt=require("jsonwebtoken")
const dotenv = require("dotenv");

dotenv.config()
const login= async(req,res,next)=>{
    try {
    
        const {userName, password}=req.body
    const thisUser= await usermodel.find({userName})
    if(thisUser.length==0){
    return    res.status(404).json({success:false, result:"user not found "})
    }
    else{
       const userPassword= thisUser[0].password 
    
       if(userPassword!==password){
     return   res.status(403).json({success:false,result:"Incorrect password"})
       }
       else{
        const token = await jwt.sign({ id: thisUser[0]._id, isAdmin:thisUser[0].isAdmin},process.env.jwt_pass);
        return res
          .status(200)
          .json({ success: true, result: { ...thisUser[0]._doc, token} });
       }
    }


    } catch (error) {
        console.log(error)
        next(createCustomError(error.message))
        
    }
    
}
module.exports=login