import { useState } from "react";
export default function Prev(){
    const[count,setCount]=useState(0);

    function increse(){
        setCount(prevCount=> prevCount+1)
    }
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={increse}>press</button>
        </div>
    )
}
