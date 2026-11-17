// function Event(){
//     function handleclick(){
//         alert("butttimann kayy idkk")
//     }
//     return(
//         <div>
//             <button onClick={handleclick}>click me</button>
//         </div>
//     )
// }
// export default Event;
//-----------------------
// function Event(){
//     function handleclick(name){
//         alert("welcome"+"  "+name)
//     }
//     return (
//         <div>
//             <button onClick={()=>handleclick("salim")}>click</button>
//         </div>
//     )
// }
// export default Event;

//=-----------------
export default function Event(){
    function handle(event){
        console.log(event);
        console.log(event.type);
    }
    return (
        <div>
            <button onClick={handle}> click</button>
        </div>
    )
}