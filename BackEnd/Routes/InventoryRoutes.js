const InventoryModel = require("../Models/InventoryModel");
const {Router} = require("express");

const InventoryRouter = Router();

InventoryRouter.get("/",async(req,res)=>{
    let inventory = await InventoryModel.find();
    res.send({msg:inventory});
});

InventoryRouter.post("/",async(req,res)=>{
    let email = req.headers.email;

    const {
        km_on_odometer,
        major_scratches,
        original_paint,
        number_of_accidents_report,
        number_of_previous_buyers,
        registeration_place,
        image
    } = req.body;

    let newCar = await new InventoryModel({
        km_on_odometer,
        major_scratches,
        original_paint,
        number_of_accidents_report,
        number_of_previous_buyers,
        registeration_place,
        image,
        user : email
    });
    await newCar.save();

    res.send({msg:"Added Item to inventory",item:newCar});
});

module.exports = InventoryRouter;