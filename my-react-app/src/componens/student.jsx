// export default function Student(props){
//     return (
//         <div>
//             <h1>hello  {props.name}</h1>
//             <h1>{props.age}</h1>
//             <h1>{props.place}</h1>
//         </div>
//     )
// }

//------destructor
export default function Student({name,age,place}){
    return (
        <div>
            <h1>hello  {name}</h1>
            <h1>{age}</h1>
            <h1>{place}</h1>
        </div>
    )
}