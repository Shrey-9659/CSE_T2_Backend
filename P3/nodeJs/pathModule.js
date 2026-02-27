const http = require("http")
const path = require("path")

const myPath = "/Users/shreykhandelwal/Desktop/Shoolini/Sem 2/AI_T2/.git/refs/remotes/origin/main.txt"

const app = http.createServer((req, res) => {
    const parsedPath = path.parse(myPath)
    console.log(parsedPath.ext)
    res.end("hello")
})

app.listen(3000, () => {
    console.log(`http://localhost:3000`)
})