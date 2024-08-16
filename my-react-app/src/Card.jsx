import profilepic from './assets/images.jpg'


function Card(){

    return(
        <div className ="card">
            <img src={profilepic} alt="profile pic"></img>
            <h2>Lara</h2>
            <p>Homeocare professional</p>

        </div>
    );
}

export default Card