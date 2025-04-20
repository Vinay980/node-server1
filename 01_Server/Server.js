const http = require("http")



const server = http.createServer((req,res)=>{
    res.end("Hello")
})

server.listen(9000,()=>{
    console.log("Server start at localhost:9000");
})