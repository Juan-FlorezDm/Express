const Author = require("../models/author.js")

const controllerAuthor = {
    create: async (req,res)=>{
        try {
            const first_name = req.body.first_name
            const family_name = req.body.family_name

            await Author.create({
                first_name: first_name,
                family_name: family_name
            })
            res.json({msg: "created"})
            res.status(201)

        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    }
}

module.exports = controllerAuthor