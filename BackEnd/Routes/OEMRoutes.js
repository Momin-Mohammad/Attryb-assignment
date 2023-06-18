const OEMModel = require("../Models/OEMModel");
const {Router} = require('express');

const OEMRouter = Router();

OEMRouter.get("/", async(req,res)=>{
    let oem_specs = await OEMModel.find();
    res.send(oem_specs);
})

OEMRouter.post("/addspecs", async(req,res)=>{
    let {
        model_name,
        model_year,
        new_vehicle_price,
        available_colors,
        mileage,
        power,
        max_speed} = req.body

    let alreadyExist = await OEMModel.find({model_name});
    if(alreadyExist.length > 0){
        res.send("Car Specs already exist");
    }
    else{
     let addOEM = await new OEMModel({
        model_name,
        model_year,
        new_vehicle_price,
        available_colors,
        mileage,
        power,
        max_speed});

        await addOEM.save();

        res.send({msg:"Added OEM Specs",OEM : addOEM});
    }
})

OEMRouter.get("/getspecs/:name",async(req,res)=>{
    let car_name = req.params.name;

    let car = await OEMModel.find({});
    let reqCar = car.filter((ele)=>(
    ele.model_name.replace(/\W/g, '').toLowerCase() === car_name.replace(/\W/g, '').toLowerCase())
    )
 
    res.send(reqCar);
})

module.exports = OEMRouter;