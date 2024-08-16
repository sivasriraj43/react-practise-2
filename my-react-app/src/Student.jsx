import propType from "prop-types"

function Student(props){
    return(
        <div className="student">
            <p>Name:{props.name}</p>
            <p>Place:{props.place} </p>
            <p>Age:{props.age}</p>
            
        </div>
    );
}
Student.propType ={
    name:propType.string,
    age: propType.number
}
Student.defaultProps={
    name:"siv",
    age:23,
}
export default Student;