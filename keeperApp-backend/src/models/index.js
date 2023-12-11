import Sequelize from 'sequelize';


const sequelize = new Sequelize("tasks_db", "root","sector7m%%%%%",{
    host:"localhost",
    dialect: "mysql"
});


sequelize.sync({alter: true});


export default sequelize;

