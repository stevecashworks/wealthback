const express= require("express")
const cors=require("cors") 
const dotenv=require("dotenv")
const connectDb=require("./connectDb.js")
const errorHandler = require("./errorHandler.js")
const userRouter = require("./Routes/users/userRoutes.js")
const transactionRouter = require("./Routes/trans/transactionRoute.js")
const postRouter= require("./Routes/posts/postRoute.js")
const subRoute = require("./Routes/subs/subsRoute.js")
const server= express()
dotenv.config()
const uri= process.env.mongo_uri
server.use(cors())
server.use(express.json())
server.use("/users",userRouter)
server.use("/transactions",transactionRouter)
server.use("/posts",postRouter) 
server.use("/subs",subRoute) 


// Error  handling middleware
server.use(errorHandler)

server.get("/",(req,res)=>{
    res.status(200).json({working:true})
    res.end()
})
const start=async()=>{  
    try {
    await connectDb(uri)
        const port = process.env.port || 1000;
    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
        
    } catch (error) {
        console.log(error)
    }
    
}
start()
