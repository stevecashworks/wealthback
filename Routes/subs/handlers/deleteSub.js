const subs = require("../../../models/dataSubs/subs.js");

const deleteSub = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id)
    await subs.findByIdAndDelete(id);
    res.status(200).json({ success: true, result: "Deleted succesfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ success: false, result: err.message });
  }
};
module.exports=deleteSub