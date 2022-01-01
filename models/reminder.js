const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reminderSchema = new Schema({
    reminder: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

const Reminder = mongoose.model("reminder", reminderSchema);
module.exports = Reminder;