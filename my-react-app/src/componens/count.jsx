import { useState } from 'react'

export default function Count (){
   
  const[count,setCount]=useState(0)
  return (
    <div>
        <h1>COUNT = {count}</h1>
        <button onClick={()=>setCount(count+1)}>INCREASE</button>
        <button onClick={()=>setCount(count-1)}>DECREASE</button>
        <button onClick={()=>setCount(0)}>RESET</button>
    </div>
  )
}