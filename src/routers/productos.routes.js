import { Router } from "express";
import { crearColors, listarColores, obtenerColorID, borrarColorID } from "../controllers/productos.controllers.js";

/*Get, Post, Path, Put, Delete*/
//Router() se guarda en router.
const router = Router();

router.route('/').post(crearColors).get(listarColores)
router.route('/:id').get(obtenerColorID).delete(borrarColorID)


export default router