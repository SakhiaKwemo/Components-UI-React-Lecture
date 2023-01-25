//Destructuring
// -> props.heading 
//OR 
//-> const {heading} = props


let house = {
    size: 100, 
    address: "8819 blvd",
    city: "MTL", 
}

// const size = 100
// const address = "8819"
const room = 4


//Spread Operator
// -> Tells computer give me everything inside of the Array/Object

house = {...house, room}

// console.log(house)

// const array = [1,2,3,4]
// const newArray = [array]
// ***ANS***
//This will give me [[1,2,3,4]]



// const array = [1,2,3,4]
// const newArray = [...array]
// ***ANS***
//This will give me [1,2,3,4]