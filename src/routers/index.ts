import { Router } from "express";
import { main } from "../controllers/homeController";


const router = Router();

router.get('/',main)

export default router;