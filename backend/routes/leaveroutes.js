// const express = require("express");
// const router = express.Router();

// router.get("/", (req, res) => {
//   res.json({ message: "Leave routes are working ✅" });
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const Leave = require("../models/leave.model");


// create leave
router.post("/", async (req, res) => {
  try {
    const leave = new Leave({
      employeeName: req.body.employeeName,
      leaveType: req.body.leaveType,
      fromDate: req.body.fromDate,
      toDate: req.body.toDate,
      reason: req.body.reason
    });

    await leave.save();
    res.status(201).json(leave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// get all leaves
router.get("/", async (req, res) => {
  const leaves = await Leave.find().sort({ createdAt: -1 });
  res.json(leaves);
});

// // update leave status
// router.put("/:id/status", async (req, res) => {
//   const updatedLeave = await Leave.findByIdAndUpdate(
//     req.params.id,
//     { status: req.body.status },
//     { new: true }
//   );

//   res.json(updatedLeave);
// });

router.put("/:id", async(req, res)=>{
    try{
        const { status} = req.body;

        const updatedLeave = await Leave.findByIdAndUpdate(
            req.params.id,
            {status},
            {new: true}
        );

        if(!updatedLeave){
            return res.status(404).json({message: "Leave not found"});

        }
        res.json(updatedLeave);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});


module.exports = router;

