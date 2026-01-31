import { Router } from "express";
import { getAllProducts, getProductById, createProduct, updateProduct } from "../controllers/product.controllers.js";

const router = Router()

router.get("/products", getAllProducts)
router.get("/products/:id", getProductById)
router.post("/products", createProduct)
router.put("/products/:id", updateProduct)

export default router