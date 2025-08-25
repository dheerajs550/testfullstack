"use client"
import React, { useEffect, useState } from 'react'
import "../globals.css";
import {addProducts, apiData } from '@/servises/prodactApiCall';


       function page() {
        const [name, setName] =useState("")
        const [price, setPrice] =useState("")
        const [company, setCompany] =useState("")
        const [color, setColor] =useState("")
        const [category, setCategory] =useState("")
        const [imgurl, setImgurl] =useState("")

      
        const isFormValid = name && price && company && color && category ;

             
             
               // Add new user
               const addProductfoo = async () => {
                 const newProduct = { name, price, company, color, category, imgurl };
                 await addProducts(newProduct);
                 const updated = await apiData(); // refresh list
                };

  return (
    <>
     <div className="form-container">
      <h1 className="form-title">Add New User</h1>

      <form >
         <input type="text" value={name} placeholder='name' onChange={(e)=>setName(e.target.value)}/>
          <input type="text" value={price} placeholder='price' onChange={(e)=>setPrice(e.target.value)}/>
          <input type="text" value={company} placeholder='company' onChange={(e)=>setCompany(e.target.value)}/>
          <input type="text" value={color} placeholder='color' onChange={(e)=>setColor(e.target.value)}/>
          <input type="text" value={category} placeholder='category' onChange={(e)=>setCategory(e.target.value)}/>
          {/* <input type="text" value={imgurl} placeholder='imgurl' onChange={(e)=>setImgurl(e.target.value)}/> */}


        <button disabled={!isFormValid} onClick={addProductfoo} type="submit">Submit</button>
      </form>
     
    </div>
    </>
  )
}

export default page