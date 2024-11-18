import React, { useEffect ,useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const [Product, setProduct] = useState({});
  const {id} = useParams();
 
  useEffect(()=>{
    const fetchData = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data);
    };
    fetchData();
  })

  let navigate = useNavigate()
  let productPage =()=>{
    navigate("/products")
  }
  

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-8 bg-slate-400 min-h-screen ">

      <div className="w-full md:w-1/2 max-w-md mx-auto md:mx-0">
        <img
          className="rounded-lg shadow-lg object-cover w-auto  mx-auto h-96"
          src={Product.image}
          alt="Product"
        />
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-12 p-6 bg-white rounded-lg shadow-md hover:scale-105 hover:shadow-2xl overflow-hidden transform transition duration-300">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 hover:text-indigo-600">
          {Product.category}
        </h2>
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          {Product.description}
        </p>
        <p className="text-2xl font-semibold text-indigo-700 mb-6">
          ${Product.price}
        </p>
        <div className="buttons flex justify-between">
        <button  className="w-28 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-950">
          Make Order
        </button>

        <button onClick={productPage} className="w-48 py-3 border border-gray-800 bg-slate-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300" >Back To Products Pages</button>
        </div>
      </div>
    </div>
  );
}
