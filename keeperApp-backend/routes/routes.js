import express from "express";
let Route = express.Router();
import * as TaskController from '../src/controllers/tasks.controller.js'


console.log("route ===========================> ", Route);

Route.get("/" /* todo validate(), */  ,  TaskController.getAllTasks );
Route.post("/", TaskController.addTask);
Route.delete("/", TaskController.deleteTask);
Route.put("/", TaskController.updateTask);

Route.put("/:taskId", TaskController.updateTaskStatus);




export default Route;