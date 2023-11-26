const posts= require("../../../models/posts/posts.js")

const deletePosts= async (req, res, next)=>{
try {
   const {id}= req.params
    await posts.findByIdAndDelete(id)
    res.status(200).json({success:true, result: "Post Deleted Successfully"})
} catch (error) {
    console.log(error.message)
    res.status(500).json({success:false, result :error.message})
}
}

module.exports= deletePosts