import { Router } from "express";
import { getAllEmployees, postEmployee, sequelizeEmployeeName, sequelizeEmployeesByid } from "../controllers/employees.controller.js";
import { ensureEmployeeExists } from "../middleware/validations.js";
import { authToken } from "../middleware/auth.js";

const router = Router();

router.get('/employees', authToken, getAllEmployees)

router.get('/employees/:id', authToken, ensureEmployeeExists, sequelizeEmployeesByid);

router.get('/employees/search/name', authToken, ensureEmployeeExists, sequelizeEmployeeName);

router.post('/employees', authToken, postEmployee)

export { router }
