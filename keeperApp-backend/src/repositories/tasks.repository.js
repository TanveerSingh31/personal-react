import Tasks from '../models/Tasks.js';



async function getAllTasks(){
    return Tasks.findAll({
        order: [['taskId', 'DESC']],
        where: {deletedAt : null}
    });
} 

async function addTask(task){
    return Tasks.create(task);
}

async function deleteTask(taskId){
    return Tasks.destroy({
        where: {taskId: taskId}
    });
}


export {
    getAllTasks,
    addTask,
    deleteTask
}