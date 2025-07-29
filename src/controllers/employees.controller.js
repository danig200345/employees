import { getEmployees, getEmployeeById } from "../models/employees.js";

export const employee = async (req, res) => {
    try {
        const employees = await getEmployees();
        res.status(200).json(employees);

    }
    catch (error) {
        res.status(500).json({ message: "Error fetching employees" });
    }
}

export const employeeById = async (req, res) => {

    try {
        const employee = await getEmployeeById(req.params.id);
        res.status(200).json(employee)
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching employee by ID" });
    }


}