const InventoryModel = require("../Models/InventoryModel");
const {Router} = require("express");

const InventoryRouter = Router();

InventoryRouter.get("/",async(req,res)=>{
    let inventory = await InventoryModel.find();
    res.send({msg:inventory});
});

InventoryRouter.post("/addCar",async(req,res)=>{
    let email = req.headers.email;

    const {
        title,
        km_on_odometer,
        major_scratches,
        original_paint,
        number_of_accidents_report,
        number_of_previous_buyers,
        registeration_place,
        image_url,
        desc
    } = req.body;

    let newCar = await new InventoryModel({
        title,
        km_on_odometer,
        major_scratches,
        original_paint,
        number_of_accidents_report,
        number_of_previous_buyers,
        registeration_place,
        image_url,
        desc,
        user_email : email
    });
    await newCar.save();

    res.send({msg:"Added Item to inventory",item:newCar});
});

InventoryRouter.delete("/delete/:id",async(req,res)=>{
    let id  = req.params.id;

    await InventoryModel.findOneAndDelete({_id:id});

    res.send({msg:"Item deleted",item:inventory})

});

InventoryRouter.patch("/update/:id",async(req,res)=>{
    let id  = req.params.id;
    let payload = req.body;
console.log(payload)
     await InventoryModel.findOneAndUpdate({_id:id},{$set:payload},{new:true});

    res.send({msg:"Item Updated"})

});

module.exports = InventoryRouter; 