import { useState } from "react" 


 const Counter = ({heading, color1, color2}) => {
    const [counter, setCounter] = useState(0)
    const [word, setWord] = useState("")
 
    return(
        <>
            <h1>{heading}</h1>
            <button style={{backgroundColor: `${color1}`, color: `${color2}`}}onClick={() => setCounter(counter => counter+1)}>Click Me!!</button>
            <p>The number of times that the button was clicked is: { counter}</p>
        </>
    )
}

export default Counter