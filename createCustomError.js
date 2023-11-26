const  createCustomError=(message,status)=>{
return { message:message?message:"oops something went wrong", status:status?status:500}
}
module.exports=createCustomError