const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({

    employeeName: {
        type: String,
        required: true,
        trim: true
    },

    leaveType:{
        type: String,
        required: true
    },

    fromDate: {
        type: Date,
        required: true
    },

    toDate: {
        type: Date,
        required: true

    },

    reason: {
        type: String
    },

    status:{
        type: String,
        default: "pending"
    }
}, {

    timestamps: true
});

module.exports = mongoose.model("Leave", leaveSchema);