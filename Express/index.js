// const express = require("express")
import express from "express"
import "dotenv/config"

const app = express()
const port = process.env.PORT || 9000

app.get("/",(req,res)=>{
    res.end("Hello1")
})

app.listen(port,()=>{
    console.log(`Server start at localhost:${port}`);
})