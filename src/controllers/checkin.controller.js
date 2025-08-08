

import { Check } from "../models/checkinSequelize.js";
import { } from "../models/join.js"
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
import { Employee } from "../models/employeeSequelize.js";
import { formattedCheckin, formattedCheckins } from "./formattedTime.controller.js";


dayjs.extend(utc);
dayjs.extend(timezone);



export const getChecks = async (req, res) => {
    try {
        const checks = await Check.findAll({
            attributes: ['id_employee', 'checkin'],
            include: [{
                model: Employee,
                as: 'employee',
                attributes: ['name']
            }]
        });

        const formatChecks = formattedCheckins(checks);
        res.status(200).json(formatChecks);
    } catch (error) {
        console.error('Error fetching check-ins:', error);
        res.status(500).json({ error: 'Error fetching check-ins' });
    }
}

export const getCheckByName = async (req, res) => {
    try {
        const employee = req.employee;


        const checks = await Check.findAll({
            attributes: ['id_employee', 'checkin'],
            include: [{
                model: Employee,
                as: 'employee',
                attributes: ['name'],
                where: {
                    id: employee.id
                }
            }],

        })
        const formatChecks = formattedCheckins(checks);
        res.status(200).json(formatChecks);

    } catch (error) {
        console.error('Error fetching check-in by name:', error);
        res.status(500).json({ error: 'Error fetching check-in by name' });
    }
}

export const postCheck = async (req, res) => {
    try {
        const { id_employee } = req.body;
        if (!id_employee) {
            return res.status(400).json({ error: 'Employee ID is required' });
        }
        const check = await Check.create({
            id_employee: id_employee,

        })
        const fullCheck = await check.reload({
            attributes: ['id_checks', 'id_employee', 'checkin'],
            include: [{
                model: Employee,
                as: 'employee',
                attributes: ['name']
            }],

        });
        const formatCheck = formattedCheckin(fullCheck);
        res.status(201).json(formatCheck);

    } catch (error) {
        console.error('Error posting check-in:', error);
        res.status(500).json({ error: 'Error posting check-in' });
    }
}