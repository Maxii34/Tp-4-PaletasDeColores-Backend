import { Router } from "express";
import { crearColors, listarColores, obtenerColorID, borrarColorID, editarColorID } from "../controllers/productos.controllers.js";

/*Get, Post, Path, Put, Delete*/
//Router() se guarda en router.
const router = Router();

router.route('/').post(crearColors).get(listarColores)
router.route('/:id').get(obtenerColorID).put(editarColorID).delete(borrarColorID)


export default router