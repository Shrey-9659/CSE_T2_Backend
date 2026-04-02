const express = require("express")
const path = require("path")
const fs = require("fs")
const homePageFileLocation = path.join(__dirname, "/views/HomePage/index.html")
const regPageFileLocation = path.join(__dirname, "/views/RegistrationPage/index.html")
const submitPageFileLocation = path.join(__dirname, "/views/SubmittedPage/index.html")


const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.sendFile(homePageFileLocation)
})
app.get("/home/form", (req, res) => {
    res.sendFile(regPageFileLocation)
})
app.get("/home/submit", (req, res) => {
    res.json({success : false, msg : "No data submitted"})
})
app.post("/home/submit", (req, res) => {
    const submittedUser = req.body
    // res.json({success : true, msg : "Data submitted successfully", submittedUser})
    console.log(submittedUser)
    fs.readFile(submitPageFileLocation, "utf-8", (err, data) => {
        if(err) console.log(err)
            else{
        const newData = data
        .replace("{firstName}", submittedUser.firstName)
        .replace("{lastName}", submittedUser.lastName)
        .replace("{email}", submittedUser.email)
        .replace("{title}", submittedUser.jobTitle)
        res.send(newData)
    }
    })
})
app.listen(3000, () => {
    console.log("Server started...")
})