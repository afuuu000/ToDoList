import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Category() {
    const [categories, setCategories]=useState([]);

    useEffect(()=>{
        const fetchCats =async()=>{
        const response= await axios.get("https://fakestoreapi.com/products/categories")
        setCategories(response.data)
        

    }

    fetchCats();
    },[])
  return (
    <div>{categories.map((cat, index)=>{
        return <Link to={`/products/${cat}`}><h1 key={index}>{cat}</h1></Link>
    })}</div>
  )
}
