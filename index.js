const express = require("express")

const mongoose = require("mongoose")
require("dotenv").config()

const authorRoutes = require("./routes/routes")


const app = express()
const port = 3308

app.set("port", port)

app.use(express.json())
app.use("/api/author", authorRoutes)


app.get("/", (req,res)=>{
    res.send("Hola")
})

app.listen(port, ()=>{
    console.log("Hola gente de la consola")
})

mongoose.connect(process.env.MONGO_DB_URI)
    .then(()=>{console.log("Base conectada")})
    .catch((err)=>{console.log(err.message)})
