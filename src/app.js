import express from "express"
import pool from "./config/db.js"

const app = express()

//middlewares
app.use(express.json())

//ruta base
app.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()")
        res.json({ message: "API funcionando", time: result.rows[0] })        
    } catch (error) {
        res.status(500).json({ error: "Error de conexión a la BD"})
    }
})

export default app;