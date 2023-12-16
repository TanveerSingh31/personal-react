import * as TaskRepository from '../repositories/tasks.repository.js'




async function getAllTasks(){
    return TaskRepository.getAllTasks();
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

export {
    getAllTasks,
    addTask,
    deleteTask,
    updateTask,
    updateTaskStatus
}