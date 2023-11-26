const express= require("express")
const {verify, verifyAdmin}= require("../users/handlers/verify");
const withdraw  = require("./handlers/withdraw");
const creditUser = require("./handlers/creditUser");
const deleteWithdrawals = require("./handlers/deleteWithdrawal");
const getAllWithdrawals= require("./handlers/getAllTrans");
const approveWithdrawal = require("./handlers/approveWithdrawals");
 const transactionRouter= express.Router()
 transactionRouter.post("/withdraw",verify,withdraw);
 transactionRouter.post("/credit",verify,creditUser);
 transactionRouter.post("/credit",verify,creditUser);
 transactionRouter.post("/delete/:id",verifyAdmin,deleteWithdrawals);
 transactionRouter.post("/getAllWithdrawals",verifyAdmin,getAllWithdrawals);
 transactionRouter.post("/approvewithdrawal/:id",verifyAdmin,approveWithdrawal);
 
 module.exports=transactionRouter