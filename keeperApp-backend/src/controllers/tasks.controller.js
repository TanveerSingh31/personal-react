import Tasks from '../models/Tasks.js';
import * as TaskService from '../service/task.service.js'



async function getAllTasks(req, res, next){
    let { userId } = req.query;
    console.log(req.query);
    let result = await TaskService.getAllTasks({userId});
    res.send(result);
}

async function addTask(req, res, next){
    console.log(req.body);
    let { title, body, userId } = req.body;
    let result = await TaskService.addTask({ title, body, userId });
    res.status(200).send(result);
}

async function deleteTask(req, res, next){

    console.log("=============================delete task called =================================");

    try{
        let { taskId } = req.query;
        console.log(req.query);
        let result = await TaskService.deleteTask(taskId);
        res.status(202).send("Task Deleted !");
    }
    catch(err){
        res.send(err);
    }
}

async function updateTask(req, res, next){
    try{
        let {taskData} = req.body;
        console.log(taskData);
        let result = await TaskService.updateTask(taskData);
        res.send("task updated!");
    }
    catch(err){
        res.send(err);
    }
}

async function updateTaskStatus(req, res, next){
    
    try{
        let { taskId } = req.params;
        let { taskStatus } = req.body;

        console.log(req.params, req.body);
        let result = await TaskService.updateTaskStatus(taskId, taskStatus);
        res.send("task marked completed!");

    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}


async function getDeletedTasks(req, res, next){
    try{
        let { userId } = req.query;
        let result = await TaskService.getDeletedTasks(userId);
        return res.status(200).send(result);
    }
    catch(err){
        return res.status(400).send(err);
    }
}

async function getUserProfileByUserId(req, res, next){
    try{
        let { userId } = req.query;
        let result = await TaskService.getUserProfileByUserId(userId);
        return res.status(200).send(result);
    }
    catch(err){
        return res.status(400).send(err);
    }
}

async function getNoOfTasks(req, res){
    try{    
        let { userId } = req.query;
        let result = await TaskService.getNoOfTasks(userId);
        let count = { count : result };
        return res.status(200).send(count);
    }
    catch(err){
        return res.status(400).send(err);
    }
}



export {
    getAllTasks,
    addTask,
    deleteTask,
    updateTask,
    updateTaskStatus,
    getDeletedTasks,
    getUserProfileByUserId,
    getNoOfTasks
}