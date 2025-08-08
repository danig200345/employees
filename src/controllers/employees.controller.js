
import { Employee } from "../models/employeeSequelize.js";


export const getAllEmployees = async (req, res) => {
    try {
        const session = req.session.user;
        console.log('Session user:', session.user);
        console.log('Session type:', session.type);
        const employees = await Employee.findAll();
        res.status(200).json(employees);
    } catch (error) {
        console.error('Error fetching employees:', error);
        res.status(500).json({ error: 'Error fetching employees' });
    }
}



export const sequelizeEmployeeName = async (req, res) => {
    try {
        const { name } = req.query;
        const employees = await Employee.findAll({
            where: {
                name: name
            }
        });
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: "Error fetching employees from Sequelize", error: error.message });
    }
}

export const sequelizeEmployeesByid = async (req, res) => {
    try {
        const employees = await Employee.findByPk(req.params.id);
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: "Error fetching employees from Sequelize", error: error.message });
    }
}

export const postEmployee = async (req, res) => {
    try {
        const { name } = req.body;
        const employee = await Employee.create({
            name: name
        });
        res.status(201).json(employee);

    } catch (error) {
        res.status(500).json({ message: "Error creating employee", error: error.message });
    }
}