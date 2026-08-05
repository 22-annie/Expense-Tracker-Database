const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Expense Tracker Server is Running");
});

app.post("/add", (req, res) => {
    const { type, category, amount, description, date } = req.body;

    const sql = `
        INSERT INTO transactions (type, category, amount, description, date)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(sql, [type, category, amount, description, date], (err, result) => {
        if (err) {
            res.status(500).json({ message: "Failed to add transaction" });
            return;
        }

        res.json({ message: "Transaction Added Successfully" });
    });
});

app.get("/transactions", (req, res) => {

    const sql = "SELECT * FROM transactions ORDER BY id DESC";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({ message: "Error fetching transactions" });
        }

        res.json(result);

    });

});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});