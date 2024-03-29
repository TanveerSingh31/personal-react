import * as TaskRepository from '../repositories/tasks.repository.js'




async function getAllTasks({userId}){
    return TaskRepository.getAllTasks({userId});
}

async function addTask(task){
    return TaskRepository.addTask(task);
}

async function deleteTask(taskId){
    return TaskRepository.deleteTask(taskId);
}

async function updateTask(taskData){
    return TaskRepository.updateTask(taskData);
}

async function updateTaskStatus(taskId, taskStatus){

    

    return TaskRepository.updateTaskStatus(taskId, taskStatus);
}

async function getDeletedTasks(userId){
    return TaskRepository.getDeletedTasks(userId);
}

async function getNoOfTasks(userId){
    return TaskRepository.getNoOfTasks(userId);
}

export {
    getAllTasks,
    addTask,
    deleteTask,
    updateTask,
    updateTaskStatus,
    getDeletedTasks,
    getNoOfTasks
}