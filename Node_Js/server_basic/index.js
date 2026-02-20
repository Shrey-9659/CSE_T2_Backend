const http = require("http")
// res.write() - to send data
// res.end() - to close the request, you can send data with this as well

const app = http.createServer((req, res) => {
    if(req.url == "/"){
        console.log("I am on home page")
        res.write("I am on home page")
        res.end()
    }else if(req.url == "/about"){
        console.log("I am on about page")
        res.end("I am on about page")
    }else if(req.url == "/contact"){
        console.log("I am on contact page")
        res.write("I am on contact page")
        res.write("I am on contact page")
        res.end("I am on contact page")
        // res.end("I am on contact page")
    }else{
        console.log("404 : Page Not Found")
        res.end("<h1>404 : Page Not Found</h1>")
    }
})

// app.listen(portNumber, callbackFunction)

app.listen(3000, () => {
    console.log("Server is running...")
})

// / - Welcome to home page
// /about - Welcome to about page
// /contact - Welcome to contact page
//  others - 404 Page Not Found