const mongoose = require("mongoose")

const url="mongodb://127.0.0.1:27017/MogooseM5"

const dbConnect = async ()=> {
    try{
        await mongoose.connect(url)
        console.log("Database created ")
    }
    catch(error)
    {
        console.log("Something went wrong",error)
    }
}
module.exports={ dbConnect }