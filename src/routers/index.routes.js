import { Router } from "express";
import colorsRoutes from "./productos.routes.js";

const router = Router();
//http://localhost:3000/api/colores
router.use('/colores', colorsRoutes)

export default router;