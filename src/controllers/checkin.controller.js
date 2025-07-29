
import { getCheckins, postCheckin } from "./../models/checkin.js";


export const getCheck = async (req, res) => {
    try {
        const checkins = await getCheckins();
        res.status(200).json(checkins);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export const postCheck = async (req, res) => {
    try {
        const checkins = await postCheckin(req.body);
        res.status(200).json(checkins);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}