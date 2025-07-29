import { Router } from "express";
import { employee, employeeById } from "../controllers/employees.controller.js";

const router = Router();

router.get('/employees', employee);

router.get('/employees/:id', employeeById);

export { router }
