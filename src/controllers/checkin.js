import { pool } from "../config/db.js";
import { getEmployeeByIdName } from "./employees.js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(timezone);


export const getCheckins = async () => {
    try {
        const [rows] = await pool.query(`
            SELECT c.id_employee, e.name, c.checkin
            FROM checks c
            JOIN employees e ON c.id_employee = e.id
        `);

        const checkins = rows.map(row => {
            const formattedTime = dayjs(row.checkin)
                .tz("America/Mexico_City")
                .format("YYYY-MM-DD hh:mm:ss A");

            return {
                id_employee: row.id_employee,
                name: row.name,
                time: formattedTime
            };
        });
        return checkins;
    } catch (error) {
        console.error('Error fetching check-ins:', error);
        throw error;
    }
};



export const postCheckin = async ({ id_employee }) => {
    try {

        const employeeRows = await getEmployeeByIdName(id_employee);

        if (employeeRows.length === 0) {
            throw new Error("Empleado no existe");
        }


        const [insertResult] = await pool.query(
            "INSERT INTO checks (id_employee) VALUES (?)",
            [id_employee]
        );


        const [checkinRows] = await pool.query(
            "SELECT checkin FROM checks WHERE id_checks = ?",
            [insertResult.insertId]
        );

        const rawTime = checkinRows[0].checkin;



        const formattedTime = dayjs(rawTime)
            .tz("America/Mexico_City")
            .format("YYYY-MM-DD hh:mm:ss A");


        return {
            checkin_id: insertResult.insertId,
            name: employeeRows[0].name,
            checkin: formattedTime,
        };
    } catch (error) {
        console.error("Error posting check-in:", error);
        throw error;
    }
};
