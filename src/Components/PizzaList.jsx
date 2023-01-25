import { useState } from "react" 
import {pizzaData} from '../pizzaData'
import Pizza from "./Pizza"

 const PizzaList = () => {
    return(
        <>
        {pizzaData.map((e, i)=> {
            return <Pizza key={i} person={e.person} name={e.name} price={e.price} size={e.size} />
        })}
        </>
    )
}

export default PizzaList