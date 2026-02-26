const http = require("http")
const url = require("url")
const app = http.createServer((req, res) => {
    let myUrl = url.parse(req.url)
    if(myUrl.pathname == "/submit"){
        res.end("Form submitted")
    }
})

app.listen(3000, () => {
    console.log("http://localhost:3000")
})

// http://localhost:3000/submit?name=rajat