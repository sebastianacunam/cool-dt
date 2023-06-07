import { Router } from "express";
import destiny from './destinyRoutes.js';

const router = Router();

router.use("/", destiny)

export default router;