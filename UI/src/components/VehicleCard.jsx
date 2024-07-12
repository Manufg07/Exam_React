import React from 'react';
import { Link, useParams } from 'react-router-dom'

const VehicleCard = ({ vehicle }) => {
  // const { id } = useParams();
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-black w-auto h-auto">
      <h3 className="text-xl font-semibold">Owner Name: {vehicle.vehicle_owner}</h3>
      <p className="text-gray-900">Service Number: {vehicle.service_no}</p>
      <p className="text-gray-900">Vehicle Number: {vehicle.vehicle_no}</p>
      <p className="text-gray-900">Vehicle Type: {vehicle.vehicle_type}</p>
      <p className="text-gray-900">Service Date: {vehicle.service_date}</p>
      <p className="text-gray-900">Estimated Time: {vehicle.estimate_time}</p>
      <p className="text-gray-900">Details: {vehicle.service_details}</p>
      {/* <button onClick={toggleText} className='flex-w-full mx-5 mb-5 text-purple-500  hover:text-purple-800'>{showFullDescription?'less':'more'}</button> */}
      {/* <Link to={`/vehicle/${vehicle._id}`} className="bg-gray-100 text-black px-4 py-2 rounded hover:bg-gray-600 self-start mx-5 my-2">Show More</Link> */}
    </div>
  );
};

export default VehicleCard;
