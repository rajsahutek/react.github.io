const express = require("express");
require("./db/conn");
const app = express();
const port = process.env.port || 3000;


app.get("/",(req,res)=>{
    res.send("Hii I am awesome good");
})

app.listen(port,()=>{
    console.log(`server is running at prot no ${port}`);
})