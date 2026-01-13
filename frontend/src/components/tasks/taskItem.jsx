import Button from "../common/button"

function Taskitem({task}){
    return(
        <div className="bg-amber-300 hover:bg-transparent hover: backdrop-blur-3xl p-2  rounded shadow flex justify-between gap-4">
            <span>{task}</span>
            <Button text="Delete" />
        </div>
    )
}

export default Taskitem