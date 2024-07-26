import { Router } from "express";
import { createUserController, getUserController } from "../controller/userController";


const router = Router()

router.post('/users', createUserController);
router.get('/users', getUserController);

export default router;