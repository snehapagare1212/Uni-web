import express, { json, urlencoded } from "express";
import mysql from "mysql2";
import cors from "cors";
import { hash, compare } from "bcrypt";

const app = express();

// Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// ===============================
// MySQL Aiven Connection Pool
// ===============================
const db = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    ssl: {
        rejectUnauthorized: false
    },

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test database connection
db.getConnection((err, connection) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }

    console.log("MySQL Connected");

    connection.release();
});

// ===============================
// REGISTER
// ===============================
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    // Check required fields
    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "Name, email and password are required"
        });
    }

    try {
        // Hash password
        const hashedPassword = await hash(password, 10);

        const sql =
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

        db.query(
            sql,
            [name, email, hashedPassword],
            (err, result) => {
                if (err) {
                    console.error("Registration database error:", err);

                    // Duplicate email
                    if (err.code === "ER_DUP_ENTRY") {
                        return res.status(409).json({
                            success: false,
                            message: "Email already registered"
                        });
                    }

                    return res.status(500).json({
                        success: false,
                        message: err.message
                    });
                }

                res.status(201).json({
                    success: true,
                    message: "User registered successfully",
                    userId: result.insertId
                });
            }
        );

    } catch (error) {
        console.error("Registration error:", error);

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
});

// ===============================
// LOGIN
// ===============================
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    // Check required fields
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required"
        });
    }


    

    try {
        const sql = "SELECT * FROM users WHERE email = ?";

        db.query(
            sql,
            [email],
            async (err, results) => {
                if (err) {
                    console.error("Login database error:", err);

                    return res.status(500).json({
                        success: false,
                        message: "Database error"
                    });
                }

                // User not found
                if (results.length === 0) {
                    return res.status(401).json({
                        success: false,
                        message: "Invalid email or password"
                    });
                }

                const user = results[0];

                // Compare password
                const passwordMatch = await compare(
                    password,
                    user.password
                );

                if (!passwordMatch) {
                    return res.status(401).json({
                        success: false,
                        message: "Invalid email or password"
                    });
                }

                res.json({
                    success: true,
                    message: "Login successful",
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    }
                });
            }
        );

    } catch (error) {
        console.error("Login error:", error);

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
});

// ===============================
// HEALTH CHECK
// ===============================
app.get("/healthz", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is running"
    });
});

// ===============================
// HOME ROUTE
// ===============================
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Uni-web API is running"
    });
});

// ===============================
// START SERVER
// ===============================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});