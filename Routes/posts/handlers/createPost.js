const postSchema=require("../../../models/posts/posts.js")
const coupons= require("../../../models/admin/coupon.js")
 
const createPost= async (req, res, next) => {

    try {
        const newPost= await postSchema.create(req.body)
        const {coupon}= req.body 
        await coupons.findOneAndDelete({code:coupon})
        
        console.log(newPost)
        const { userName } = newPost._doc;
        // const newUserdetails = await userSchema.findOneAndUpdate(
        //   { userName },
        //   { $inc: { activityEarning: -400 } }
        // );
        // console.log(newUserdetails)
        res.status(200).json({success:true, result:"Post Sent Succesfully" })
    } catch (error) {
     res.status(500).json({success:false,result:error.message})   
    }

}
module.exports=createPost