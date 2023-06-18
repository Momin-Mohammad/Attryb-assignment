const mongoose = require('mongoose');


const oemSchema = mongoose.Schema({
    model_name: String,
    model_year: Number,
    new_vehicle_price: Number,
    available_colors:Array,
    mileage: Number,
    power : Number,
    max_speed : Number
});

const OEMModel = mongoose.model('oem_specs',oemSchema);

module.exports = OEMModel;