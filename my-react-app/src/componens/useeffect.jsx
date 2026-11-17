

// import { useEffect,useState } from "react";
// export function Hooks(){
//     const[count,setCount]=useState(0);
//     useEffect(()=>{
//         document.title=`COUNT: ${count}`
//     },[count])
//     return (     
//             <button onClick={()=>setCount(count+1)}>increase</button>
      
//     )
// }
//--------------------------

// import { useState,useEffect } from "react";
// export default function Hooks(){
//     const[count,setCount]=useState(0);
//     useEffect(()=>{
//         console.log("added one")
//     },[count])
//     return (

//         <div>
//             <h1>COUNT = {count}</h1>
//             <button onClick={()=>{setCount(count +1)}}>ADD</button>
//         </div>
//     )
// }

// //----------------------
// import { useState,useEffect } from "react";
// export default function Hooks(){
//     const [count,setcount]=useState(0);
//     useEffect(()=>{
//         const timer=setInterval(()=>{
//             setcount(prev=>prev+1);
//         }, 1000)
//         return ()=>{
//             clearInterval(timer)
//         }
//     }, []);
//     return (
//         <div>
//             <h1>count{count}</h1>
//         </div>
//     );
// }

