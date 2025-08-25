"use client";
import { BASE_URL } from '@/lib/apiurl'
import { useRouter } from 'next/navigation';
import React from 'react'

function DelereBtn({id, onDelete} ) {
    const router = useRouter()
    // console.log(props.id)
    const deteleRecord = async () =>{
        let response = await fetch(`${BASE_URL}/products/${id}`,{
            method:"delete"
        });
        response= await response.json()
        if(response.success){
            alert("Product Delete")
            onDelete()
          
        }
    }
  return (
   <button onClick={deteleRecord} className="bg-red-500 p-2 rounded hover:bg-red-600 text-white">🗑️</button>
  )
}

export default DelereBtn