const withdrawals = require("../../../models/trans/withdrawals.js");

const deleteWithdrawals = async (req, res, next) => {
  try {
    const { id } = req.params;
    await withdrawals.findByIdAndDelete(id);
    res.status(200).json({ success: true, result: "Deleted succesfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ success: false, result: err.message });
  }
};
module.exports= deleteWithdrawals
