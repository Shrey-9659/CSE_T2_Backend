const express = require("express")
const path = require("path")
const users = require("./users")
const indexFileLocation = path.join(__dirname, "index.html")

const app = express()

// serverName.methodName("/route", callbackFunction)
app.get("/submit", (req, res) => {
    // res.send("Page submitted...")
    // res.sendFile(indexFileLocation)
    // res.json({name : "Shrey", year : "2026"})
})
app.get("/v2/users", (req, res) => {
    res.json(users)
})
// Dynamic Routing : 
app.get("/v2/users/:id", (req, res) => {
    let userId = +(req.params.id)
    let myUser = users.filter((user) => {
        return user.id == userId
    })
    res.json(myUser)
})

app.listen(3000, () => {
    console.log("Server started...")
})


// Home page(button to go to form) - / - GET
// Form page to take the user details - /form
// After filling the details and clicking the submit button - redirected to submit page - /form/submit (POST PAGE - Form submitted successfully)

// - Take the user info and store them in a file

// Redirected to homepage if comes to /form/submit via get method
// Home page another button to see all the users
// (Bcrypt)
// Email : qwerty@qwert.com
// Pass : @dvdvkagowhrfowes5svkjjsdbl#kdfbd
// (MongoDB)
// JWT - JSON WEB TOKEN