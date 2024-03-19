const mongoose = require("mongoose")

//Schema is used to validate and restrict our collection
const studentSchema = mongoose.Schema({
    id:{
        type:Number,
        unique:true,
        required:true,
        description:"ID should be unique"
    },
    fullname:{
        type:String,
        description:"Full name should be in string"
    },
    phone:{
        type:Number,
        description:"Phone No.should be in Numeric values"
    }
})

const studentModel = mongoose.model("student", studentSchema) 

//exporting our module 
module.exports = { studentModel }