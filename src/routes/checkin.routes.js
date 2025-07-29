import { Router } from "express";

import { postCheckin, getCheckins } from "../controllers/checkin.js";

const router = Router();

router.get('/checkins', async (req, res) => {
    try {
        const checkins = await getCheckins();
        res.status(200).json(checkins);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});


router.post('/checkins', async (req, res) => {
    try {
        const checkins = await postCheckin(req.body);
        res.status(200).json(checkins);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

export { router };