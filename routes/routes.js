const express = require("express")

const router = express.Router()
const controllerAuthor = require("../controllers/author")

router.post("/create", controllerAuthor.create)

router.get("/juan", (req, res)=>{
    res.send("Hola juan").status(204)
})

router.get("/Diego", (req,res)=>{
    res.send("Hola Diego").status(200)
})

module.exports = router