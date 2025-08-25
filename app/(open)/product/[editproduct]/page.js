"use client"
import React, { useEffect, useState } from 'react'
import "../../globals.css";
// import {addProducts, apiData } from '@/servises/prodactApiCall';
import { BASE_URL } from '@/lib/apiurl';
import Link from 'next/link';


  function Page({params}) {
        const [name, setName] =useState("")
        const [price, setPrice] =useState("")
        const [company, setCompany] =useState("")
        const [color, setColor] =useState("")
        const [category, setCategory] =useState("")
        const isFormValid = name && price && company && color && category;
        // const unwrappedParams = React.use(params)
              // const productId = params.editproduct;
              const { editproduct: productId } = React.use(params);
             useEffect(()=>{
                getProductDelail()
             },[productId])
  
            // this code for  prifill infut fild 
            const getProductDelail = async ()=>{
                let productData = await fetch(`${BASE_URL}/products/${productId}`)
                productData= await productData.json();

                if(productData.success){
                    let result=productData.result
                    setName(result.name)
                    setPrice(result.price)
                    setCompany(result.company)
                    setColor(result.color)
                    setCategory(result.category)   
                }
            }
            //  this code for update data or editdata 
            const updateProduct = async()=>{
               let data = await fetch(`${BASE_URL}/products/${productId}`,{
                method:"PUT",
                body:JSON.stringify({name, price, color,category,company})
               })
               data = await data.json();
               if(data.result){
                alert("Your Product has bean Updated ")
               }
            }


  return (
    <>
     <div className="form-container">
      <h1 className="form-title">Edit User</h1>

      <form >
         <input type="text" value={name} placeholder='name' onChange={(e)=>setName(e.target.value)}/>
          <input type="text" value={price} placeholder='price' onChange={(e)=>setPrice(e.target.value)}/>
          <input type="text" value={company} placeholder='company' onChange={(e)=>setCompany(e.target.value)}/>
          <input type="text" value={color} placeholder='color' onChange={(e)=>setColor(e.target.value)}/>
          <input type="text" value={category} placeholder='category' onChange={(e)=>setCategory(e.target.value)}/>

            <Link href={"/product"}>
            <button disabled={!isFormValid} onClick={updateProduct}  type="submit">Updated User</button>
            </Link>
      </form>
     
    </div>
    </>
  )
}

export default Page