import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddNew = () => {

  const [service_no, setService_no] = useState('');
  const [vehicle_owner, setVehicle_owner] = useState('');
  const [vehicle_no, setVehicle_no] = useState('');
  const [vehicle_type, setVehicle_type] = useState('');
  const [service_date, setService_date] = useState('');
  const [estimate_time, setEstimate_time] = useState('');
  const [service_details, setService_details] = useState('');

  const navigate = useNavigate()

  const submitForm = (e) =>{
    e.preventDefault()
    const newVehicle = {
        service_no,
        vehicle_owner,
        vehicle_no,
        vehicle_type,
        service_date,
        estimate_time,
        service_details
    }
   const res= AddVehicle(newVehicle)
   toast.success('Added successfully')
   navigate('/home')
  }
  
  const AddVehicle = async(newVehicle) => {
    const res = await fetch('/api/vehicle',{
      method : 'POST',
      headers:{
        'Content-Type' : "application/json",
      },
      body:JSON.stringify(newVehicle)
    })
    return res;
  }

  return (
    <>
      {/* <!-- form - adding new course --> */}

      <section className="bg-gray-100 flex items-center justify-center min-h-screen">
          <div className="container m-auto max-w-2xl py-2">
            <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
              
              <form onSubmit={submitForm}>
                <h2 className="text-3xl text-purple-800 text-center font-semibold mb-6">
                  Vehicle
                </h2>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Service no
                  </label>
                  <input
                    type="text"
                    id="service_no"
                    name="service_no"
                    className="border rounded w-full py-2 px-3 mb-2"
                    placeholder=".."
                    required
                    value={service_no}
                    onChange={(e)=> setService_no(e.target.value)} 
                  />
            </div>
            <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Owner name
                  </label>
                  <input
                    type="text"
                    id="vehicle_owner"
                    name="vehicle_owner"
                    className="border rounded w-full py-2 px-3 mb-2"
                    placeholder=".."
                    required
                    value={vehicle_owner}
                    onChange={(e)=> setVehicle_owner(e.target.value)} 
                  />
            </div>
            <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    vehicle number
                  </label>
                  <input
                    type="text"
                    id="vehicle_no"
                    name="vehicle_no"
                    className="border rounded w-full py-2 px-3 mb-2"
                    placeholder="number"
                    required
                    value={vehicle_no}
                    onChange={(e)=> setVehicle_no(e.target.value)} 
                  />
            </div>
         {/* <div className="mb-4">
                  <label
                    htmlFor="vehicle_owner"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Vehicle Onwer
                  </label>
                  <textarea
                    id="vehicle_owner"
                    name="vehicle_owner"
                    className="border rounded w-full py-2 px-3"
                    rows="4"
                    placeholder="vehicle_owner"
                    value={vehicle_owner}
                    onChange={(e)=> setVehicle_owner(e.target.value)} 

                  
                  ></textarea>
                </div> */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    vehicle type
                  </label>
                  <input
                    type="text"
                    id="vehicle_type"
                    name="vehicle_type"
                    className="border rounded w-full py-2 px-3 mb-2"
                    placeholder=".."
                    required
                    value={vehicle_type}
                    onChange={(e)=> setVehicle_type(e.target.value)} 
                  />
            </div>
            <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Service Date
                  </label>
                  <input
                    type="text"
                    id="service_date"
                    name="service_date"
                    className="border rounded w-full py-2 px-3 mb-2"
                    placeholder=".."
                    required
                    value={service_date}
                    onChange={(e)=> setService_date(e.target.value)} 
                  />
            </div>
            <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Estimate Time
                  </label>
                  <input
                    type="text"
                    id="estimate_time"
                    name="estimate_time"
                    className="border rounded w-full py-2 px-3 mb-2"
                    placeholder=".."
                    required
                    value={estimate_time}
                    onChange={(e)=> setEstimate_time(e.target.value)} 
                  />
            </div>
            
                <div className="mb-4">
                  <label
                    htmlFor="service_details"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Service details
                  </label>
                  <textarea
                    id="service_details"
                    name="service_details"
                    className="border rounded w-full py-2 px-3"
                    rows="4"
                    placeholder="instruction for preparation"
                    value={service_details}
                    onChange={(e)=> setService_details(e.target.value)} 

                  
                  ></textarea>
                </div>

                <div>
                  <button
                    className="bg-purple-500 hover:bg-purple-600 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Add 
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
    </>
  )
}

export default AddNew