let employee = [{
        name: "Tatas",
        company: "Arkademy",
        job: "Trainer",
        status: "single",
        city: "Jogja"
    }, {
        name: 'Pratama',
        company: 'Emago',
        job: 'Trainer',
        status: 'single',
        city: 'Jakarta'

    }

]
let newPerson = [{
    ...employee[0],
    status: "menikah",
    city: "jakarta"
}, {
    ...employee[1],
    city: "jogja"
}]
console.log(newPerson);




// // console.log(newPerson);
// const person = {
//     name: 'Tatas',
//     age: 28,
//     status: 'single'
// }

// const newPerson = {
//     ...person,
//     age: 30,
//     status: "menikah"
// }

// console.log(newPerson === person) // false
// console.log(newPerson) // { name: 'John', age: 30 }