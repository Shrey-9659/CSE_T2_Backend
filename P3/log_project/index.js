const http = require("http")
const url = require("url")
const fs = require("fs")
const PORT = 3000
const app = http.createServer((req, res) => {
    // Date --> Req at ------ --> IP address : ------
    // Date
    let myDate = new Date()
    let timeToAdd = myDate.toUTCString()
    // Path
    let path = url.parse(req.url)
    let pathToAdd = path.pathname
    // Ip
    let ipToAdd = req.socket.remoteAddress
    // Adding data in log.txt file
    fs.appendFileSync("log.txt", `${timeToAdd} --> Req at ${pathToAdd} --> IP address : ${ipToAdd}\n`)
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})


// 20.20.1.210:3000