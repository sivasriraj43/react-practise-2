
function UserGreeting(props){
    if(props.isLog){
        return <h2 className="welcome">Welcome {props.username}</h2>
    }else{
        return <h2 className="nolog"> NOt login</h2>
    }

    

}
export default UserGreeting;