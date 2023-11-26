const express = require("express")
const register = require("./handlers/register")
const login = require("./handlers/login")
const loginWithToken=require("./handlers/loginWithToken.js")
const getAllCodes= require("./handlers/getCodes.js")
const {verify,verifyAdmin}=require("./handlers/verify.js")
const createCouponCode = require("./handlers/generateCoupon.js")
const getAllUsers = require("./handlers/getAllUsers.js")
const userRouter = express.Router()
userRouter.post("/register",register),
userRouter.post("/login",login),
userRouter.post("/tk",verify, loginWithToken),
userRouter.get("/coupon", getAllCodes)
userRouter.post("/all", verifyAdmin,getAllUsers)
userRouter.post("/coupon/add",verifyAdmin,createCouponCode);



module.exports= userRouter