import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { router } from './src/routes/employees.routes.js';
import { router as checkinRouter } from './src/routes/checkin.routes.js';

const app = express();
dotenv.config();

app.use(cors());

app.use(express.json());
app.use(router, checkinRouter);


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));