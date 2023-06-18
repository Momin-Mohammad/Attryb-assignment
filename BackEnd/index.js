const express = require('express');
var cors = require('cors')
const app = express();
const UserRouter = require('./Routes/UserRoutes');
const  connection = require('./Config/db');
const OEMRouter = require('./Routes/OEMRoutes');
const CheckLoggedIn = require('./Middleware/LoginAuth');
const InventoryRouter = require('./Routes/InventoryRoutes');
require('dotenv').config

app.use(express.json());
app.use(cors({origin:"*"}));
app.use('/user',UserRouter);

app.use(CheckLoggedIn);

app.use('/oem',OEMRouter);
app.use('/inventory',InventoryRouter);

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