import {Route , Routes} from "react-router-dom"
import Navbar from "../components/common/navbar"
import Login from "../pages/login"
import Register from "../pages/register"
import Dashboard from "../pages/dashboard"
import Profile from "../pages/profile"
function App(){
    return (
        <>
         <Navbar/>
         <Routes>
           <Route 
              path="/" element = {<Login/>} />
              
            <Route 
               path="/register" element={<Register/>}/>

               <Route path="/dashboard" element={<Dashboard/>}/>

               <Route path="/profile" element={<Profile/>}/>
         </Routes>
        </>
    )
}

export default App