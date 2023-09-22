import { useEffect, useState } from "react"

export default function Users() {

    const [users, setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data));
    }, [])

    const userStyle={
        border:'2px solid red',
        padding:"20px",
        margin:'20px'
    }

    return (
       
        <div style={userStyle}>
            <h3>Users:{users.length}</h3>
        </div>
    )
}