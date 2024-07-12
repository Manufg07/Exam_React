const { Schema} =require('mongoose');
const { model} =require('mongoose');

const vehicleSchema = new Schema({
//    courseId: { type: String, required: true },
   service_no: { type: String, required: true },
   vehicle_no: { type: String, required: true },
   vehicle_owner: { type: String, required: true },
   vehicle_type: { type: String, required: true },
   service_date: { type: String, required: true },
   estimate_time: { type: String, required: true },
   service_details: { type: String, required: true },
});

const vehicle = model('vehicle', vehicleSchema);

module.exports = vehicle;
