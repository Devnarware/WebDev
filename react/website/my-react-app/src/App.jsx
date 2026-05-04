// import Card from "./Card.jsx"

// function App(){


//     return(
//         <Card/>
//     );
// }

// export default App ;

// import Button from './Button.jsx'

// function App(){

//     return(
//         <Button />
//     )
// }

// export default App


// WAYS TO STYLE A COMPONENT IN REACT

// EXTERNAL CSS :- it is for global value and it is used for styling multiple components(good for small projects) eg:- index.css

// MODULE CSS :- it is for local value and it is used for styling single component(good for large projects) eg:- Button.module.css

// INLINE CSS :- it is for local value and it is used for styling single component(good for large projects) eg:- style={{color:"red"}} in Button.jsx



import Students from './Students.jsx'

function App(){
    return(
        <Students name = "IronMan" age = {30} isStudent = {false} />
    )
    // when we have to send non string value to the component then we have to use {} and inside that we can write any js code and that will be evaluated and the result will be sent to the component as a prop value
}

export default App ;