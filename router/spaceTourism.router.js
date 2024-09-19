import { Router } from "express";
const router = Router();
import spaceTourism from "../controller/spaceTourism.controller.js";
// Router for all space Tourism related routes
router.get("/crew", spaceTourism.crew);
router.get("/destination", spaceTourism.destination);
router.get("/technology", spaceTourism.technology);

export default router;
