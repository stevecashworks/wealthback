const subs = require("../../../models/dataSubs/subs.js");
const getAllSubs= async (req, res, next) =>{
try {
    const allSubs= await subs.find()
    res.status(200).json({success:true, result:allSubs})
} catch (error) {
    console.log(error)
    res.status(500).json({success:false,result:error.message})
}
}
module.exports=getAllSubs