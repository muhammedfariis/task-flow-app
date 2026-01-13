import {Route , Routes} from "react-router-dom"
import Navbar from "../components/common/navbar"
import Login from "../pages/login"
import Register from "../pages/register"
function App(){
    return (
        <>
         <Navbar/>
         <Routes>
           <Route 
              path="/" element = {<Login/>} />
              
            <Route 
               path="/register" element={<Register/>}
            />
         </Routes>
        </>
    )
}

export default App