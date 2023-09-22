
// Conditonal rendering Sytem 1
// export default function Todo({task, isDone}) {
    
//         if(isDone){
//             return <li>Finised: {task}</li>
//         }else{
//             return <li>work on: {task}</li>
//         }
    
// }

// Conditional rendering with ternery operator
// export default function Todo({task, isDone}) {
    
//        return(
//         <li>{isDone ? "Finished":"work on"}  : {task}</li>
//        )
// }
export default function Todo({task, isDone}) {
    
       return(
        <li>{task} {isDone || "work on"}</li>
       )
}

// export default function Todo({task, isDone}) {
    
//        return(
//         <li>{task} {isDone && "Finished"}</li>
//        )
// }