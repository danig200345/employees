import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Login } from '../models/login.js';
dotenv.config();

export const loginToken = async (req, res) => {
    try {
        const { user } = req.admin;
        const payload = { id: user.id, user: user, type: user.type };
        const type = await getTypeUser(user);
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '8h' });
        res.cookie('access_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 8 * 60 * 60 * 1000
        }).json({ token, type });


    } catch (error) {
        console.error('Error generating token:', error);
        return res.status(500).json({ success: false, message: 'Error generating token' });
    }


}

export const logout = async (req, res) => {
    res.clearCookie('access_token');
    return res.status(200).json({ message: 'Logged out successfully' });
}

export const getTypeUser = async (user) => {
    const type = await Login.findAll({

        where: {
            user: user
        }
    })
    return type[0].type;
}