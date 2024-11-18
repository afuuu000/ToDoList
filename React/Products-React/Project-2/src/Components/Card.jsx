import React from "react";
import { Link, useNavigate } from "react-router-dom";

 
export default function Card({dataValue}) {
  // console.log("====================>", props.dataValue.image);
  const navigate = useNavigate();
  const handleClick=()=>{
   navigate(`/productDetails/${dataValue.id}`) 
  }
  return (
    <div>
      <div className="max-w-xs bg-white shadow-2xl rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl mt-12 mb-5">
        <img
          className="w-auto  mx-auto h-48 object-cover"
          src={dataValue.image}
          alt="Card Image"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-indigo-600">
            {dataValue.category}
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-3">
            {dataValue.description}
          </p>
          <p className="py-2 rounded-md font-bold mt-4 text-lg text-indigo-700">
            ${dataValue.price}
          </p>
          <button onClick={handleClick} className="w-full mt-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-950 ">
             Make order
          </button>
        </div>
      </div>
    </div>
  );
}
