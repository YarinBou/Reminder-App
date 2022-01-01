const reminders = require("./routes/reminders");
const connection = require("./db");
const cors = require("cors");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();

connection();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());
app.use("/api/reminders", reminders);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("running on Port " + port));