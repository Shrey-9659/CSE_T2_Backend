let isPromiseResolved = false;

let newPromise = new Promise((resolve, reject) => {
    if(isPromiseResolved){
        console.log("This is an example of resolved promise")
        resolve("Abhay Kushwaha")
    }else{
        console.log("This is an example of rejected promise")
        reject()
    }
})
newPromise
.then((data) => {
    console.log("Promise is resolved")
    console.log(data)
})
.catch(() => {
    console.log("Promise is rejected")
})
.finally(() => {
    console.log("Sanad")
})

// https://github.com/Shrey-9659/CSE_T2_Backend