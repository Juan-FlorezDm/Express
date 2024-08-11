const mongoose = require("mongoose")
const schema = mongoose.Schema

const AuthorSchema = new schema({
    first_name:{
        type: String,
        require: true,
        maxLen: 100
    },
    family_name:{
        type: String,
        require: true,
        maxLen: 100
    }
})

module.exports = mongoose.model("Author", AuthorSchema)