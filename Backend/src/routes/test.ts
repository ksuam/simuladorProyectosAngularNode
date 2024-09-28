import { Router } from "express";
import { getPersona } from "../controllers/test";

const router = Router();

router.get('/', getPersona)

export default router;