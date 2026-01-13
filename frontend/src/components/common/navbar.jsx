import {Link} from "react-router-dom"

function Navbar(){
    return(
        <nav className="bg-transparent backdrop-blur-3xl h-20 p-5  flex justify-between  items-center">
           <div className="font-bold text-opacity-60 text-slate-900 text-2xl">Task-Flow</div>
            <div className="flex gap-5 text-zinc-900 text-lg">
                <Link to= "/">Login</Link>
                <Link to= "/dashbord">Dashboard</Link>
                <Link to= "/profile">Profile</Link>
            </div>

        </nav>
    )
}

export default Navbar