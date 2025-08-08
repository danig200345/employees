import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();


export const authToken = async (req, res, next) => {
    const tokens = req.cookies.access_token
    req.session = { user: null }
    try {
        const data = jwt.verify(tokens, process.env.JWT_SECRET_KEY);
        req.session.user = data

    }
    catch (error) {
        return res.status(401).json({ message: 'Unauthorized', error: error.message });
    }
    next()

}