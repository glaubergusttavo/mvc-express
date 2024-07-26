import { Router } from "express";
import { createCarController, getCarController } from "../controller/carController";


const router = Router()

router.post('/cars', createCarController);
router.get('/cars', getCarController);

export default router;
