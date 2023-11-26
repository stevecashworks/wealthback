const express= require("express")
const createPost = require("./handlers/createPost");
const getAllPosts=require("./handlers/getAllPosts");
const { verifyAdmin } = require("../users/handlers/verify");
const deletePosts = require("./handlers/deletepost");
const postRoute=express.Router()
postRoute.post("/all",verifyAdmin,getAllPosts);
postRoute.post("/new",createPost)
postRoute.post("/delete/:id",verifyAdmin, deletePosts)

module.exports=postRoute                   