export default function ({friend}){
    console.log(friend);
    const {name, email, id, username, address, phone}=friend;
    const styleFriend={
        border:'2px solid red',
        margin:'20px',
        padding:'20px',
        borderRadius:'25px'
    }
    return (
        <div style={styleFriend}>
            <h3>id:{id}</h3>
            <h3>Name:{name}</h3>
            <h3>username:{username}</h3>
            <h3>Email:{email}</h3>
            {/* <h3>address:{address}</h3> */}
            <h3>phone:{phone}</h3>
        </div>
    )
}