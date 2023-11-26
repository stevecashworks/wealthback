const errorHandler=(err,req,res,next)=>{
const  status=err.status||500
const  message=err.message||"Oops something went wrong"
res.status(status).json({
    success:false,
    result:message
})
}
module.exports=errorHandler