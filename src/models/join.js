
import { Employee } from "./employeeSequelize.js";
import { Check } from "./checkinSequelize.js";


Employee.hasMany(Check, {
    foreignKey: 'id_employee',
    as: 'checks'
})
Check.belongsTo(Employee, {
    foreignKey: 'id_employee',
    as: 'employee'
})