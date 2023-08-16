const express = require("express")
require("dotenv").config()
const cors = require("cors")
const app = express()
// const connectToMongo = require("./utils/mongodb")

// connectToMongo()

app.use(cors({
    origin: "*"
}))

app.use(express.urlencoded({ extended: true })); 
app.use(express.json())
app.use("/api/flipkart", require("./routes/route"))

app.get("/", (req,res) => {
    res.send("Working")
})


app.listen(5000, ()=>{
    console.log("Working on port 5000")
})