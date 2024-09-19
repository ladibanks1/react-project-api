import { Router } from "express";
import Err from "../utils/customError.js";
const router = Router();

router.all("*" , (req, res , next) => {
    const error = new Err("Route not found" , 404);
    next(error);
})

export default router;