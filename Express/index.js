import logger from "./logger.js"
import morgan from "morgan"
// const express = require("express")
import express from "express"
import "dotenv/config"

const app = express()
const port = process.env.PORT || 9000

const morganFormat = ":method :url :status :response-time ms";

app.use(
    morgan(morganFormat, {
        stream: {
            write: (message) => {
                const logObject = {
                    method: message.split(" ")[0],
                    url: message.split(" ")[1],
                    status: message.split(" ")[2],
                    responseTime: message.split(" ")[3],
                };
                logger.info(JSON.stringify(logObject));
            },
        },
    })
);

app.get("/", (req, res) => {
    res.end("Hello1")
})

app.listen(port, () => {
    console.log(`Server start at localhost:${port}`);
})