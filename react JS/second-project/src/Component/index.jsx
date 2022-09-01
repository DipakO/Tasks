import "./index.css"
const UserCard = (props) =>{
    return(
    <div id = "userCard">
    <h1>{props.name}</h1>
    <p>{props.mobNumber}</p>
    <p>{props.state}</p>
    <p>{props.dist}</p>
    </div>
    )
}

export default UserCard;