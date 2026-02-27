const http = require("http")
const fs = require("fs")
const PORT = 3000
const app = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url == "/"){
        // Index.html file serve karni hai
        fs.readFile("index.html", "utf-8", (err, data) => {
            if(err) console.log(err)
                else res.end(data)
        })
    }else if(req.url == "/style.css"){
        fs.readFile("style.css", "utf-8", (err, data) => {
            if(err) console.log(err)
                else res.end(data)
        })
    }
})

app.listen(PORT, () => {
    console.log("Server Started...")
})