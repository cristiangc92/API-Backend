import pool from "../config/db.js"

export const getAllProducts = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM products ORDER BY id ASC"
        )
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({ error: "Error al obtener productos" })
    }
}

export const getProductById = async (req, res) => {
    const { id } = req.params

    try {
        const result = await pool.query(
            "SELECT * FROM products WHERE id = $1",[id] //$1 → query parametrizada (evita SQL injection)
        )

        if(result.rows.length === 0){
            return res.status(404).json({
                error: "Producto no encontrado"
            })
        }

        res.json(result.rows[0])
    } catch (error) {
        res.status(500).json({
            error: "Error al obtener el producto"
        })        
    }
}