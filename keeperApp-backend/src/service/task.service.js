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

export {
    getAllTasks,
    addTask,
    deleteTask
}