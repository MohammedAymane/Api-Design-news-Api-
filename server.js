const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

// Connect to the Database
connectDB();

const app = express(); 

// Init Midleware
app.use(cors());
app.use(express.json({extended:false}));


app.get("/",(req, res) =>{ 
    res.send("API running")
})

// Define Routes



const PORT = process.env.PORT || 9000;

app.listen(PORT, ()=>{
    console.log("server started on port : "+PORT)
})