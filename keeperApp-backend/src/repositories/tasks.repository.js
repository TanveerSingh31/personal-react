import Tasks from '../models/Tasks.js';
import { Op , QueryTypes } from 'sequelize';
import sequelize from '../models/index.js';


async function getAllTasks({userId}){
    return Tasks.findAll({
        order: [['taskId', 'DESC']],
        where: {deletedAt : null, ...(userId && {userId})}
    });
} 

async function addTask(task){
    console.log(task);
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


async function updateTaskStatus(taskId, taskStatus){
    return Tasks.update({taskStatus},{
        where: {taskId}
    });
}

async function getDeletedTasks(userId){
    let query = ` select * from tasks_db.tasks where deletedAt is not null and userId=:userId`;
    
    return sequelize.query(query,{
        type: QueryTypes.SELECT,
        replacements: { userId }
    })

}





export {
    getAllTasks,
    addTask,
    deleteTask,
    updateTask,
    updateTaskStatus,
    getDeletedTasks
}