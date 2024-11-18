import React, { Fragment, useEffect, useState,  } from "react";
import Card from "./Card";
import axios from "axios";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

export default function CardApp() {
  const [dataProd, setDataProd] = useState([]);
  const [searchedItems, setSearchedItems]=useState("");
  const [newProducts, setNewProducts]=useState([]);
  const [sortOrder, setSortOrder] = useState(""); 
 
  const {categoryName}= useParams();

 
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setDataProd(response.data);
      setNewProducts(response.data);
    };

    const fetchCategoryData=  async() => {
    const resp= await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`)
    setDataProd(resp.data)   
    setNewProducts(resp.data)
   }


    categoryName ? fetchCategoryData() : fetchData();
  }, []);
  useEffect(() => {
    const searchProducts = dataProd.filter((item) =>
      item.title.toLowerCase().includes(searchedItems.toLowerCase())
    );
    setNewProducts(searchProducts);
  }, [searchedItems]);

  const handleSort = (order) => {
    setSortOrder(order);
    const sortedProducts = [...newProducts].sort((a, b) => {
      if (order === "asc") return a.price - b.price;
      if (order === "desc") return b.price - a.price;
      return 0;
    });
    setNewProducts(sortedProducts);
  };
  

  return (
  <Fragment>
    <div className="top flex justify-center">
        <input
        type="text"
        className="w-8/12 px-4 py-2 rounded-md bg-white shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Search Bar"
       onChange={(e)=>{
        setSearchedItems(e.target.value)
       }}
      />
      <button
          onClick={() => handleSort("asc")}
          className="mt-1 ml-1 px-2 py-2 mr-2 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-950"
        >
          Ascending
        </button>
        <button
          onClick={() => handleSort("desc")}
          className="mt-1 px-2 py-1 border border-gray-800 bg-slate-200 text-gray-800 font-semibold rounded-md hover:bg-slate-300"
        >
          Descending
        </button>
      </div>

    <div className="flex justify-evenly flex-wrap gap-6">
      {newProducts.map((item ,index) => {
        return <Card key={index} dataValue={item} />;
      })}
    </div>
    </Fragment>
  );
}
