const express= require("express")
const createSub = require("./handlers/createSub")
const getAllSubs = require("./handlers/getAllSubs")
const { verifyAdmin } = require("../users/handlers/verify")
const deleteSub = require("./handlers/deleteSub")
const subRoute=express.Router()
subRoute.post("/new",createSub)
subRoute.post("/all",verifyAdmin,getAllSubs)
subRoute.post("/delete/:id",verifyAdmin,deleteSub)


module.exports= subRoute