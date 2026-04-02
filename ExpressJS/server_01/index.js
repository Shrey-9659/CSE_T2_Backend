const express = require("express")
const path = require("path")
const fs = require("fs")
const users = require("./users.json")
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
    const userLength = users.length

    users.push({
        id : userLength + 1,
        ...submittedUser
    })
    fs.writeFile("users.json", JSON.stringify(users), (err, data) => {
        if(err) console.log(err)
    })
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


// https://github.com/Shrey-9659/CSE_T2_Backend