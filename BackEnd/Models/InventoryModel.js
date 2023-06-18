const mongoose = require('mongoose');


const inventorySchema = mongoose.Schema({
    km_on_odometer: Number,
    major_scratches: Number,
    original_paint: String,
    number_of_accidents_report:Number,
    number_of_previous_buyers: Number,
    registeration_place : String,
    image : String
});

const InventoryModel = mongoose.model('marketplace_inventory',inventorySchema);

module.exports = InventoryModel;