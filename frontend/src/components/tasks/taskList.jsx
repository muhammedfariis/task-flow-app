import Taskitem from "./taskItem";

function TasksList ({tasks}){
  if(tasks.length===0){
    return <p className="text-blue-950  font-bold text-lg">NO TASK YET</p>
  }

  return(
    <div className="flex flex-col gap-2">
        {tasks.map((task,ind)=>(
            <Taskitem key={ind} task={task}/>
        ))}
    </div>
  )

}

export default TasksList