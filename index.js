const express=require('express')
const path = require('path')
const { stringify } = require('querystring')
const { dbConnect } = require('./db/dbConnect')
const { studentModel } = require('./Model/studentModel')


const app= express()

const PORT = 7000

//static pages middlware 
app.use(express.static(path.join(__dirname,"view")))


//middelwaree
app.use(express.json(stringify))

app.get('/',(req,res)=>{
    console.log(req.url,req.method)
    //res.send("<h1>server started</h1>")
    res.sendFile(path.join(__dirname,"view","index.html"))
})

app.post('/newStudent', async (req,res)=>{
    console.log(req.url,req.method)
    res.send({msg:"data recieved !!"})
    console.log(req.body)

    //Getting DB connection 
    const student = new studentModel(req.body)
    const response = await student.save()
    console.log(response)
    
})

app.get('/blog',(req,res)=>{
    console.log(req.url,req.method)
    //res.send("<h1>Blog page</h1>")
    res.sendFile(path.join(__dirname,"view","pages","blog.html"))
})



app.listen(PORT,"127.0.0.7",()=>{
    console.log(`Server started 127.0.0.7@${PORT}`)
    //for connecting Dtabse
    dbConnect()
})