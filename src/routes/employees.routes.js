import { Router } from "express";
import { getEmployees } from "../controllers/employees.js";

const router = Router();

router.get('/employees', async (req, res) => {
    try {
        const employees = await getEmployees();
        res.status(200).json(employees);

    }
    catch (error) {
        res.status(500).json({ message: "Error fetching employees" });
    }
});

export { router }
