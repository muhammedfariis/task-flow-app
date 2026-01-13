
import { useTasks } from "../hooks/usetask";
import TaskList from "../components/tasks/taskList";
import Button from "../components/common/button";
import { useState } from "react";

function Dashboard() {
  const { tasks, addTask } = useTasks();
  const [taskText, setTaskText] = useState("");

  const handleAdd = () => {
    if (taskText.trim() !== "") {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <div className="flex flex-col p-7 min-h-screen min-w-screen  bg-linear-to-br from-green-500 transition-opacity group-hover:animate-bounce">
      <h1 className="text-3xl font-bold mb-4 text-center">Dashboard</h1>
      <div className="flex justify-center items-center mb-5">
        <input
          type="text"
          placeholder="Creat Your Own Task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="border-4 p-2  flex-1 mr-2 outline-none
          -[2px] bg-linear-to-r from-purple-500 to-blue-500 rounded-xl
            hover:from-green-500 hover:to-orange-500 text-xl font-bold
          "
        />
        <Button text="Add" onClick={handleAdd} />
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default Dashboard;
