import { Router } from "express";

import { getCheck, postCheck } from "../controllers/checkin.controller.js";

const router = Router();

router.get('/checkins', getCheck);


router.post('/checkins', postCheck);

export { router };