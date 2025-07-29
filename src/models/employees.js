import { pool } from "../config/db.js";

export const getEmployees = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM employees');
        return rows;
    } catch (error) {
        console.error('Error fetching employees:', error);
        throw error;
    }
}

export const getEmployeeById = async (id) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [id]);
        if (rows.length === 0) {
            throw new Error('Employee not found');
        }
        return rows[0];
    } catch (error) {
        console.error('Error fetching employee by ID:', error);
        throw error;
    }
}
export const getEmployeeByName = async (name) => {
    try {
        const [rows] = await pool.query('SELECT ? FROM employees', [name]);
        if (rows.length === 0) {
            throw new Error('Employee not found');
        }
        return rows[0];
    } catch (error) {
        console.error('Error fetching employee by Name:', error);
        throw error;
    }
}
export const getEmployeeByIdName = async (id) => {
    try {
        const [rows] = await pool.query('SELECT name FROM employees WHERE id = ?', [id]);
        if (rows.length === 0) {
            throw new Error('Employee not found');
        }
        return rows;
    } catch (error) {
        console.error('Error fetching employee by ID:', error);
        throw error;
    }
}