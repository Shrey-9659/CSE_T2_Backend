const http = require("http")
const fs = require("fs")

const app = http.createServer((req, res) => {
    // Writing in a file - Sync
    fs.writeFileSync("sync.txt", "FS Module - Sync method")
    // Writing in a file - Async
    fs.writeFile("async.txt", "FS Module - Async Method", (err, data) => {
        if(err) console.log("Unable to write in a file")
            else console.log("Data written successfully")
    })
    // Reading from a file - Sync
    let readData = fs.readFileSync("sync.txt", "utf-8")
    console.log(readData)
    // Reading from a file - Async
    fs.readFile("async.txt", "utf8", (err, data) => {
        if(err) console.log(err)
            else console.log(data)
    })
    // Appending in a file - Sync
    fs.appendFileSync("sync.txt", "Appending in a file\n")
    // Appending in a file - Async
    fs.appendFile("async.txt", "Appending in a file - Async\n", (err, data) => {
        if(err) console.log(err)
            else console.log("Data appended successfully")
    })
    // Deleting a file - unlink
    fs.unlink("async.txt", (err, data) => {
        if(err) console.log(err)
            else console.log("File deleted")
    })

    // Copying a file - cpSync
    fs.cpSync("sync.txt", "copySync.txt")

    // Stats of a file - statSync
    let statData = fs.statSync("sync.txt")
    console.log(statData)
})

app.listen(3000, () => {
    console.log("Server running...")
})