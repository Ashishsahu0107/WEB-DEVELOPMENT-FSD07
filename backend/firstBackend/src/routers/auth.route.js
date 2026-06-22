import express from 'express';
import { LoginUser, RegisterUser, LogoutUser } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/login", LoginUser);
router.post("/register", RegisterUser);
router.post("/logout", LogoutUser);

export default router;