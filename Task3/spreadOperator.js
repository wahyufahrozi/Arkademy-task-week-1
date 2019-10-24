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
console.log("Before:");
console.table(employee);
let newPerson = [{
    ...employee[0],
    status: "menikah",
    city: "jakarta"
}, {
    ...employee[1],
    company: "arkademy",
    city: "jogja"
}]

console.log("After:");
console.table(newPerson);




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