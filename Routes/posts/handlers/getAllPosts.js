const postSchema=require("../../../models/posts/posts.js")

const getAllPosts= async( req, res, next) => {
try {
    const allPosts = await postSchema.find();
    res.status(200).json({success:true, result: allPosts})
    
} catch (error) {
    console.log(error.message)
    res.status(500).json({success:false, result:error.message})
}

}
module.exports= getAllPosts