// // Method 1: if-else:-
//     export default function Crr(){
//     const login=true;
//     if(login){
//         return <h1>WELCOME USER</h1>
//     }
//     else{
//         return <h1>pls login again</h1>
//     }
// }

// // Method 2: Ternary Operator (? :):-
// export default function Crr(){
//     const login=false;
//     return (
//         <div>
//             {login ? <h1>welcome the user</h1> :<h1>pls login again</h1>}
//         </div>
//     )
// }

//  Logical AND (&&):-
// function Crr(){
//     const login=true ;
//     return(
//         <div>
//             {login && <h1>welcome to user!</h1>}
//         </div>
//     )
// }
// export default Crr;

// Element Variables:-
function Crr(){
    const login=false;
    let message;
    if(login){
        message=<h1>welcome user</h1>
    }else{
        message=<h1>pls login again</h1>
    }
    return (
        <div>
            {message}
        </div>
    )
}
export default Crr;