import { DataTypes } from "sequelize";
import { sequelize } from "./sequelize.js";

export const Login = sequelize.define('Login', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'admin',
    timestamps: false
});