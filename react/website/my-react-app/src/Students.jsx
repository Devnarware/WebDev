import PropTypes from 'prop-types'

function Students(props){
    return(
        <div className = "Student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

// props are the way to send data from parent component to child component in react and it is read only and it is an object and it is passed as an argument to the component function and we can access the props values using props.propName

// props are just like class or interface in java we can define it and use it again and again

// Students.propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//     isStudent: PropTypes.bool
// }

// this not works anymore it proptypes was working before react 19 but it is now removed

export default Students ;