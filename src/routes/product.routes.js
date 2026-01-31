import { Router } from "express";
import { getAllProducts, getProductById } from "../controllers/product.controllers.js";

const router = Router()

router.get("/products", getAllProducts)
router.get("/products/:id", getProductById)

export default router