let api = "https://jsonplaceholderr.typicode.com/users"
// fetch(api)
// .then((data) => {
//     return data.json()
// })
// .then((response) => {
//     console.log(response)
// })
// .catch((error) => {
//     console.log(error)
// })
async function fetchData(){
    try{
        let rawData = await fetch(api)
        let response = await rawData.json()
        console.log(response)
    }catch(error){
        console.log(error.message)
    }
}
fetchData()