let api = "https://jsonplaceholderr.typicode.com/users";
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

let fetchData = async () => {
    try{
        let metaData = await fetch(api);
        let data = await metaData.json();
        console.log(data);
    }catch(error){
        console.log(error)
    }
};

fetchData();
