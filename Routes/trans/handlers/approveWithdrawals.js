const withdrawals= require("../../../models/trans/withdrawals.js")

const approveWithdrawal= async (req, res, next) =>{
try {
    const {id} =req.params
    const  newWithDrawal= await withdrawals.findByIdAndUpdate(id, {
        $set:{
            status:"approved"
        }

    })

    res.status(200).json({success: true, result :newWithDrawal})
} catch (error) {
    console.log(error.message)
    res.status(500).json({success: false, result: error.message})
}
}
module.exports=approveWithdrawal