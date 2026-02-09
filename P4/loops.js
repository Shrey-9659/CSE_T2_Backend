let arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr)
// map - Used to perform some operation on each and every element of an array
// let mappedArray = arr.map((value) => {
//     return value * 3
// })
// .map((data) => {
//     return data + 1
// })
// console.log(mappedArray)

// filter - It filters out the elements, if the condition satisfies we keep that element else pop it out
// let filterArray = mappedArray.filter((value) => {
//     return value%2 == 0;
// })
// console.log(filterArray)

// reduce
// arrayName.reduce((currentValue, accumulator) => {
// }, initialValue)
// let reduceArray = filterArray.reduce((curr, acc) => {
//     return curr + acc
// }, 0)
// console.log(reduceArray)

// ---------------

let newArray = arr.map((value) => {
    return value * 3;
}).filter((value) => {
    return value%2 == 0
}).reduce((curr, acc) => {
    return curr + acc
}, 0)
// console.log(newArray)

const users = [
  { id: 1, name: "Aarav" },
  { id: 2, name: "Diya" },
  { id: 3, name: "Rohan" },
  { id: 4, name: "Ananya" },
  { id: 5, name: "Kabir" },
  { id: 6, name: "Ishita" },
  { id: 7, name: "Vivaan" },
  { id: 8, name: "Meera" },
  { id: 9, name: "Arjun" },
  { id: 10, name: "Nisha" }
];
let userName = users.map((user) => {
    console.log(user.name)
})
