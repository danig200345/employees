import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { router } from './src/routes/employees.routes.js';
import { router as checkinRouter } from './src/routes/checkin.routes.js';
import { login } from './src/routes/login.routes.js';

const app = express();
dotenv.config();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use(router, checkinRouter, login);


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));