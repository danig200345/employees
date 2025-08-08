import { DataTypes } from "sequelize";
import { sequelize } from "./sequelize.js";




export const Check = sequelize.define('Check', {
    id_checks: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_employee: {
        type: DataTypes.INTEGER,
        references: {
            model: 'employee',
            key: 'id'
        },
    },
    checkin: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'checks',
    timestamps: false
});



