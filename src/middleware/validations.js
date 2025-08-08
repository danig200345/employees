
import { Employee } from "../models/employeeSequelize.js";



export const ensureEmployeeExists = async (req, res, next) => {
    const { name } = req.query;

    if (!name) {
        return res.status(400).json({ error: 'Employee name is required' });
    }

    try {
        const employee = await Employee.findOne({ where: { name } });
        if (!employee) {
            return res.status(404).json({ error: `Employee with name ${name} does not exist` });
        }

        req.employee = employee;
        next();
    } catch (err) {
        console.error('Middleware error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};