import { DataTypes } from "sequelize";
import { sequelize } from "./sequelize.js";



export const Employee = sequelize.define('Employee', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    tableName: 'employees',
    timestamps: false
});

