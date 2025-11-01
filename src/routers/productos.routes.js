import { Router } from "express";
import { crearColors, listarColores } from "../controllers/productos.controllers.js";

/*Get, Post, Path, Put, Delete*/
//Router() se guarda en router.
const router = Router();

router.route('/').post(crearColors).get(listarColores)


export default router