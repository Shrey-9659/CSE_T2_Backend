let city = document.getElementById("city")
let btn = document.getElementById("btn")
let text = document.getElementById("text")


btn.addEventListener("click", async () => {
    try {
        let api = `https://api.weatherapi.com/v1/current.json?key=e884e49500a94e69811163154241309&q=${city.value}`
        
        let rawData = await fetch(api)
        let res = await rawData.json()
        text.innerText = `Temperature in ${city.value} is ${res.current.temp_c}`
        
    } catch (error) {
        console.log(error)
    }
})