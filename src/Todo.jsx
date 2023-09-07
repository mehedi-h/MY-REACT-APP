// export default function Todo ({task}) {
//     return (
//         <li>Task : {task}</li>
//     )
// }

// conditional Rendering (system-1)
// export default function Todo ({task, isDone}) {
//     if(isDone === true){
//         return (
//             <li>Weldone Boy, You done Task: {task}</li>
//         )
//     }
//     else{
//         return (
//             <li>Ops, Work on this Task: {task}</li>
//         )
//     }
// }


// conditional Rendering (system-2)
export default function Todo ({task, isDone}){
    if(isDone) {
        return (
            <li>Bravo, You done this task : {task}</li>
        )
    }
    return <li>Continue Exploring this task : {task}</li>
}