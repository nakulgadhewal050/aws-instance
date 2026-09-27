import express from 'express'
const app = express()

app.get("/",(req,res)=>{
    return res.json({
        message: "Hello World"
    })
})

app.get("/health",(req,res)=>{
    return res.json({
        status: "healthy"
    })
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})