import {Link} from "react-router-dom"

function Navbar(){
    return(
        <nav className="bg-linear-to-tl from-lime-400 to-blue-400 backdrop-blur-3xl h-20 w-full gap-2 p-5 flex justify-between  items-center">
           <div className="font-bold text-opacity-60 text-slate-900 text-2xl">TaskFlow</div>
            <div className="flex gap-5 text-zinc-900 text-lg">
                <Link to= "/">Login</Link>
                <Link to="/register">Register</Link>
                <Link to= "/dashboard">Dashboard</Link>
                <Link to= "/profile">Profile</Link>
            </div>

        </nav>
    )
}

export default Navbar