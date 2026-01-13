import Taskitem from "./taskItem";

function TasksList ({tasks}){
  if(tasks.length===0){
    return <p className="text-amber-900 hover:text-yellow-50">NO TASK YET</p>
  }

  return(
    <div>
        {tasks.map((task,ind)=>(
            <Taskitem key={ind} task={task}/>
        ))}
    </div>
  )

}

export default TasksList