import tasks from '../data/taska.json';

export const getTasksData = async () => {
    console.log(tasks)
    return tasks
}

export const postTask = async (newTask) => {
    newTask.id = tasks.length + 1;
    tasks.push(newTask)
    return {ok: true, message: "Task Added Successfully"}
}

export const postNewTask = async (newTask)=>{
    newTask.id = tasks.length + 1;
    tasks.push(newTask)
    return {ok:true, message: "Task Added Successfully"}
}