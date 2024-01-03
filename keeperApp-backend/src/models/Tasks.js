import Sequelize from './index.js';
import { DataTypes } from 'sequelize';




const Tasks = Sequelize.define('tasks', {
    taskId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false
    },
    taskStatus: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
}, {
    freezeTableName: true,
    paranoid: true
});

export default Tasks;