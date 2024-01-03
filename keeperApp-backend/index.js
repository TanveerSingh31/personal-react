import express from "express"
import Route from './routes/routes.js';
import Sequelize from './src/models/index.js'
import cors from 'cors';
// import serverless from 'serverless-http';
// let Route = express.Router();

let app = express();
const port = 5002;


// app.use will act as middleware always, whenever a new request comes to the server
// and it will go through each middleware , before hitting the target
app.use(express.json());
app.use(cors()); // this is used so that frontend can call backend API's
app.use("/", Route);    

app.listen(port, ()=>{
    try{
        Sequelize.authenticate();
        console.log(`server started on http://localhost:${port}/`);
    }
    catch(err){
        console.log(err);
    }
});

// export const handler = serverless(app); // calling serverless function




