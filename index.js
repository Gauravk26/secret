console.log("Testing")
import express from "express";
const app = express();
const port = process.env.PORT || 8001;
app.listen(port,() => {
    console.log(`Listening on ${port}`)
})
console.log("Test")
console.log("Test")