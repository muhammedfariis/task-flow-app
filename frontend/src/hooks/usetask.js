import { useState } from "react";

export function useTasks(){
    const [tasks , setTasks] = useState([])
    const addTask = (task)=>{
        setTasks([...tasks , task])
    }
    return {tasks , addTask}
}

