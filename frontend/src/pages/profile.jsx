import {useState} from "react"

function Profile(){
   
    const [text , setText] = useState("")
    
    return(
       <>
         <div className="min-h-screen bg-linear-to-br from-green-500 w-full flex flex-col justify-center items-center gap-5">
            <h1 className="font-bold text-4xl text-blue-950">User Details</h1>
            <div className="h-50 w-96 bg-amber-100 flex justify-center items-center gap-3 rounded-2xl">
                <div className="h-40 w-40 bg-blue-700 rounded-full flex items-center justify-center">
                      <p>Photo</p>
                     </div>
                    <div className="flex flex-col ">
                     <p>UserName</p>
                     <div className="h-5 w-auto rounded-4xl bg-gray-600" ></div>
                     <p>PhoneNumber</p>
                     <div className="h-5 w-auto rounded-4xl bg-gray-600" ></div>
                     <p>UserID</p>
                     <div className="h-5 w-auto rounded-4xl bg-gray-600" ></div>
                     </div> 

            </div>
         </div>
       
       
       
       </>
    )


}

export default Profile