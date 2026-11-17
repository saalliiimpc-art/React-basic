// import { useState } from "react"

// export default function Form(){
//     const[name,setName]=useState("")
//     const[age,setAge]=useState("")
//     const[email,setEmail]=useState("")
//     const[error,setError]=useState("")
//     function handle(e){
//           e.preventDefault();
//         if(name===""){
//             setError("pls enter your name first")
//         }else if(age===""){
//             setError("pls enter your age ")
//         }else if(!email.includes("@")){
//             setError("invalid email ")
//         }else{
//             setError("");
//             alert("subimmtted")
//         }
//     }
//     return (
//         <div>
//             <h1>Form Validation</h1>
//             <form onSubmit={handle}>
//                 <input 
//                     type="text"
//                     placeholder="Enter Your Name"
//                     value={name}
//                     onChange={(e) =>setName(e.target.value)}
//                 />
//                 <br></br>
//                 <br></br>
//                 <input 
//                     type="number" 
//                     placeholder="Enter Your Age"
//                     value={age}
//                     onChange={(e)=>setAge(e.target.value)}
//                 />
//                 <br></br>
//                 <br></br>
//                 <input 
//                     type="text"
//                     placeholder="Enter Your Email"
//                     value={email}
//                     onChange={(e)=>setEmail(e.target.value)}
//                 />
//                 <br></br>
//                 <br></br>
//                 <button type="submit">submitt</button>
//                 <p>{error}</p>
//             </form>
//         </div>
//     )
// }



// q:-
import "./form.css"
import { useState } from "react";

export default function Studentfrorm(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")

    function handle(e){
        e.preventDefault();
        if(name===""){
            setError("Name is required")
        }
        else if(email===""){
            setError("Email is required")
        }else if(!email.includes("@")){
            setError("Invalid email")  
        }else if(password.length<6){
            setError("Password must be at least 6 characters")
        }else{
            setError("")
            alert("Registration successful!")
        }
    }
    return (
        <div>
            <h1>Student Registration</h1>
            <form onSubmit={handle}>
                <input 
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <br />
                <br />
                <input 
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <br />
                <br />
                <input 
                    type="number"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <br />
                <br />
                <button type="submit">Register</button>
                <p>{error}</p>
            </form>
        </div>
    )
}