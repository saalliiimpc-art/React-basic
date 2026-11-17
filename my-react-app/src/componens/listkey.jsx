// export default function LIst(){
//     const SCHOOL=["SALIM","SAMIR","SHIAFANA"]
//     return (
//         <div>
//             {SCHOOL.map((student,index)=>{
//                 return (
//                     <h1 key={index}>{student}</h1>
//                 )
//             })}
//         </div>
//     )
// }

export default function List(){
     const students = [
            { id: 1, name: "Amal" },
            { id: 2, name: "Rahul" },
            { id: 3, name: "Arun" }
        ];
        return (
            <div>
                {students.map((st)=>{
                    return (
                        <h1 key={st.id}>{st.name}</h1>
                    )
                })}
            </div>
        )
}
