// setTimeout(function, timeInMS)
console.log("first")
setTimeout(() => {
    console.log("I will run after one seconds...")
}, 1000)
let secondTimeout = setTimeout(() => {
    console.log("I will run after two seconds...")
}, 2000)
setTimeout(() => {
    console.log("I will run after three seconds...")
}, 3000)
console.log("Second")
// clearTimeout(reference)
// clearTimeout(secondTimeout)