const subs=require("../../../models/dataSubs/subs.js")
const user= require("../../../models/users/user.js")
const createSub= async (req, res, next) => {
try {
    const newSub = await subs.create(req.body);
    const {userId,source,amount}=req.body
    await user.findByIdAndUpdate(userId, {
      $inc: {
        [source]: (amount * -1),
      },
    });
    res.status(200).json({success:true, result: newSub})

} catch (error) {
    console.log(error.message)
    res.status(500).json({success:false, result:error.message})
}
}

module.exports=createSub