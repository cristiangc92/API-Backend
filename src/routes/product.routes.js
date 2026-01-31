import { Router } from "express";
import { getAllProducts, getProductById, createProduct } from "../controllers/product.controllers.js";

const router = Router()

router.get("/products", getAllProducts)
router.get("/products/:id", getProductById)
router.post("/products", createProduct)

export default router