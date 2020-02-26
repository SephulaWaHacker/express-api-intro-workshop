const express = require('express')

// initialise express 
const app = express()

// let express json request body 
app.use(express.json())

// create a 'GET' endpoint on default path
app.get('/', (req,res,next)=>{
    res.status(200).json({
        status: "ok"
    })
})

// create a 'POST' endpoint on default path 
app.post('/', (req,res,next)=>{

    res.status(200).json({
        name: req.body.name,
        age: req.body.age,
        comment: req.body.comment,
        date: req.body.date

    })
})

const server = app.listen(9005, ()=>{
    console.log('app listening at port 9005');
})