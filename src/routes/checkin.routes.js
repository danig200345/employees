import { Router } from "express";

import { getChecks, postCheck, getCheckByName } from "../controllers/checkin.controller.js";
import { ensureEmployeeExists } from "../middleware/validations.js";
import { authToken } from "../middleware/auth.js";

const router = Router();


router.get('/checks', authToken, getChecks);
router.get('/check/employee', authToken, ensureEmployeeExists, getCheckByName);
router.post('/checks', postCheck);

export { router };