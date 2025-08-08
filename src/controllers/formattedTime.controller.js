import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(timezone);


export const formattedCheckins = (checks) => {
    return checks.map(check => {
        const formattedTime = dayjs.tz(check.checkin, "America/Mexico_City")
            .format("YYYY-MM-DD hh:mm:ss A");

        return {
            id_employee: check.id_employee,
            name: check.employee.name,
            time: formattedTime,
        };
    })
};
export const formattedCheckin = (checks) => {
    const formattedTime = dayjs.tz(checks.checkin, "America/Mexico_City")
        .format("YYYY-MM-DD hh:mm:ss A");

    return {
        id_employee: checks.id_employee,
        name: checks.employee.name,
        time: formattedTime,
    };

};