import { useState,useEffect } from "react"


export default function Url(){
    const[input,setInput]=useState("")
    const[error,seterror]=useState(false)

    function handle(){
        if( input.startsWith("http://")||input.startsWith("https://")){
            seterror(true)
        }else{
            seterror(false)
        }
    }
    
    useEffect(()=>{
        handle()
        console.log("kk");
        
    },[input])


    return(
        <div>
            <h1>url chek</h1>
            <input
                type="text"
                placeholder="enter your url"
                value={input}
                onChange={(x)=>setInput(x.target.value)}
            ></input>
            <p style={{color: error ? "green":"red"}}>{error ? "Valid URL" : "Invalid URL"}</p>
        </div>
    )

}