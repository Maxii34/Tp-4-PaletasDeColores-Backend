import { Router } from "express";
import { agregarColors } from "../controllers/producto,controller";

/*Get, Post, Path, Put, Delete*/
//Router() se guarda en router.
const router = Router();

router.route('/').get(agregarColors)

export default router