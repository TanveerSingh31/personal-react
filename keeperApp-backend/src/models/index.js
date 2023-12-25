import Sequelize from 'sequelize';
import 'dotenv/config';


console.log("process.env", process.env);


const sequelize = new Sequelize(process.env.DB, process.env.DB_USER ,process.env.DB_PASS,{
    host: process.env.DB_HOST,
    dialect: "mysql"
});


sequelize.sync({alter: true});


export default sequelize;

