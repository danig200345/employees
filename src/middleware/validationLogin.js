
import { Login } from "../models/login.js";

export const validateLogin = async (req, res, next) => {
    const { user, password } = req.body;

    if (!user || !password) {
        return res.status(400).json({ message: 'User and password are required' });
    }

    try {
        const admin = await Login.findOne({
            where: { user, password }
        });

        if (!admin) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        req.admin = admin;
        next();
    } catch (error) {
        console.error('Error during login validation:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}