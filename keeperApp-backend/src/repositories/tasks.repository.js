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

async function updateTask(taskData){
    let { taskId, title, body } = taskData;

    return Tasks.update({
        title, 
        body
    },{
        where : { taskId }
    })
}


export {
    getAllTasks,
    addTask,
    deleteTask,
    updateTask
}