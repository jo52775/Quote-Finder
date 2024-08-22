const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())

// Test endpoint
app.get("/test-route", (req,res) => {
    res.send({
        "message": "Test endpoint works!"
    })
})

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})