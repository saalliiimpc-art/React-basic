import { useState } from "react"




export default function Inputt(){
    const[input,setInput]=useState("");
    const[list,setList]=useState([]);
    

    function handle(){
        if(input.trim()===""){
            return;
        }
            setList([...list,input])
            setInput("")
        

    }
    function deletee(index){
        let newlist=[...list]
        newlist.splice(index,1)
        setList(newlist)

    }
    return (
        <div>
            <h1>INPUT BOX</h1>  
            <div>
                <input 
                    type="text"
                    placeholder="enter"
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}>
                </input>
                <button onClick={handle}>Add</button>
            </div>
            <ul>
                {list.map((item,index)=>
                    <li key={index}>
                        {item}
                        <button onClick={deletee}>delete</button>
                    </li>
                )}
            </ul>
            
        </div>
    )
}
