import { useState } from "react"
export default function Project(){
    const[count,setCount]=useState(0);

    function incr(){
        setCount(count+1)
    }
    
function dec(){
    setCount(count-1)
}
function reset(){
    setCount(0)
}

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={incr}>Increase</button>
            <button onClick={dec}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

}