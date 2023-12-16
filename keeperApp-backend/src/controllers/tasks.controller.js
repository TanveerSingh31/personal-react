import * as TaskService from '../service/task.service.js'



async function getAllTasks(req, res, next){
    let result = await TaskService.getAllTasks();
    res.send(result);
}

async function addTask(req, res, next){
    console.log(req.body);
    let { title, body, createdBy = 123 } = req.body;
    let result = await TaskService.addTask({ title, body, createdBy });
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


export {
    getAllTasks,
    addTask,
    deleteTask,
    updateTask,
    updateTaskStatus
}