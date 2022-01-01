const Reminder = require("../models/reminder");
const express = require("express");
const router = express.Router();

router.post("/", async(req, res) => {
    try {
        const reminder = await new Reminder(req.body).save();
        res.send(reminder);
    } catch (error) {
        res.send(error);
    }
});

router.get("/", async(req, res) => {
    try {
        const reminders = await Reminder.find();
        res.send(reminders);
    } catch (error) {
        res.send(error);
    }
});

router.put("/:id", async(req, res) => {
    try {
        const reminder = await Reminder.findOneAndUpdate({ _id: req.params.id },
            req.body
        );
        res.send(reminder);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/:id", async(req, res) => {
    try {
        const reminder = await Reminder.findByIdAndDelete(req.params.id);
        res.send(reminder);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;