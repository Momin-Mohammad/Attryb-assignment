const mongoose = require('mongoose');


const inventorySchema = mongoose.Schema({
    title : String,
    km_on_odometer: Number,
    major_scratches: String,
    original_paint: String,
    number_of_accidents_report:Number,
    number_of_previous_buyers: Number,
    registeration_place : String,
    image_url : String,
    desc:String,
    user_email : String
});

const InventoryModel = mongoose.model('marketplace_inventory',inventorySchema);

module.exports = InventoryModel;