const express = require("express")
require("dotenv").config()
const cors = require("cors")
const app = express()

app.use(cors({
    origin: "*"
}))

app.use(express.urlencoded({ extended: true })); 
app.use(express.json())
app.use("/api/products", require("./routes/products"))

app.get("/", (req,res) => {
    res.send("Working")
})


app.listen(5000, ()=>{
    console.log("working on port 5000")
})