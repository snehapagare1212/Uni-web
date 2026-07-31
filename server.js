import express, { json, urlencoded } from "express";
import mysql from "mysql2";
import cors from "cors";
import { hash } from "bcrypt";

const app = express();   

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ab"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err);
        return;
    }
    console.log("MySQL Connected");
});

// Register API
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await hash(password, 10);

        const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

        db.query(sql, [name, email, hashedPassword], (err) => {
            if (err) {
                return res.status(500).send(err.message);
            }

            res.send("User registered successfully");
        });

    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});