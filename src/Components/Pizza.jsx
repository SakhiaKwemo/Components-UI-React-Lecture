import { useState } from "react" 

 const Pizza = ({person, size, name, price}) => {

    const [orderSize, setOrderSize] = useState(() => {
        if(size === "M") {
            return "Medium"
        }
        if(size === "S") {
            return "Small"
        }
        if(size === "L") {
            return "Large"
        }
    })

    return(
        <div style={{border: "2px solid red", margin: '15px', padding: '8px', fontSize: '15px'}}>
        <h1>Hello {person}</h1>
        <p>You ordered a: {orderSize} {name} pizza</p>
        <p>Your price is: {price}$</p>
        </div>
    )
}

export default Pizza