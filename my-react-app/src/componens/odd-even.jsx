import { useState } from "react";
import "./odd-even.css"; 
export default function Oddd() {
    const [odd, setodd]=useState(1);
    const [even, seteven]=useState(0);

    function increment(){
        if (odd===21 && even===20 ) {
            reset()
        }else{
            seteven(even +2)
            setodd(odd +2)
        }
    }
    function decrement(){
        if(odd===1 && even===0){
            return;

        }else{
            seteven (even -2)
            setodd( odd -2)
        }
    }
    function reset(){
        seteven(0);
        setodd(1);
    }
    
    
    return (
        <div className="counter-container">
            <h1>ODD : {odd}</h1>
            <h1>EVEN : {even}</h1>
            <div className="button-group">
                <button onClick={increment}>ADD</button>
                <button onClick={decrement}>DECREMENT</button>
                <button onClick={reset}>RESET</button>
            </div>
        </div>
    )

}