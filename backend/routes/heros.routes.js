import { Router } from "express";
import { getAll, addHero, updateHero } from "../controller/heros.controller.js";

const  router = Router()

router.get('/getAll',getAll)
router.post('/addHero',addHero)
router.post('/addHero',updateHero)


export default router