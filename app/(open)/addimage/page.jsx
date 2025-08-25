"use client"
import { BASE_URL } from '@/lib/apiurl'
import React, { useState } from 'react'

function page() {
  const [file, setFile]= useState()
  const handleSubmit= async(e)=>{
    e.preventDefault()
    console.log(file)
    const data= new FormData();
    data.set("file", file);
    let result = await fetch(`${BASE_URL}/imgupload`,{
      method:"POST",
      body:data
    });
    result = await result.json();
    console.log(result)
    if(result.success){
      alert("file upload")
    }

  }
  return ( <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-red-600 mb-6">
          Upload Image
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={(e)=>setFile(e.target.files?.[0])}
            className="block w-full text-sm text-gray-700 
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-red-600 file:text-white
                       hover:file:bg-red-700"
          />

          {/* Preview */}
          {
          // preview &&
           (<div className="flex justify-center">
              <img
                // src={preview}
                alt="preview"
                className="mt-4 w-32 h-32 object-cover rounded-lg border border-red-300"
              />
            </div>)}

          <button 
            type="submit"
            // disabled={loading}
            className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg font-semibold 
                       hover:bg-red-700 transition duration-200 disabled:opacity-50"
          >
            {// loading ? // "Uploading..." // : 
            "Upload"}
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default page