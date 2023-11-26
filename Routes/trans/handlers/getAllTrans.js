const withDrawalSchema= require("../../../models/trans/withdrawals.js")
const getAllWitdrawals= async (req, res, next) => {
    try {
        const allWithdrawals=await withDrawalSchema.find()
        res.status(200).json({ success: true, result: allWithdrawals });

    } catch (error) {

        console.log(error.message)
        res.status(200).json({ success: true, result: allWithdrawals });

    }
}
module.exports= getAllWitdrawals