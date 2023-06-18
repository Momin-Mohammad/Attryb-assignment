const express = require('express');
var cors = require('cors')
const app = express();
const UserRouter = require('./Routes/UserRoutes');
const  connection = require('./Config/db');
const OEMRouter = require('./Routes/OEMRoutes');
require('dotenv').config

app.use(express.json());
app.use(cors({origin:"*"}));
app.use('/user',UserRouter);
app.use('/oem',OEMRouter);

app.get("/",(req,res)=>{
    res.send("Hello add /user to get all users thank you :)")
})

app.listen(process.env.port,async()=>{
    try{
        connection;
        console.log("Connected To DB")
    }catch(e){
        console.log(e)
    }
    console.log(`Server Running ${process.env.port}`)
});