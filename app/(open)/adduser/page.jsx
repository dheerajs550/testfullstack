"use client"
import React, { useState } from 'react'
import "../globals.css";
import { apiData } from '@/apiroute/page';


function page() {
    const [name, setName] =useState("")
    const [age, setAge] =useState("")
    const [email, setEmail] =useState("")
    const addUser = async(e)=>{
          e.preventDefault();
        const data ={ method:"Post",
                      body:JSON.stringify({name, age, email})
                    }
      let respone = await fetch(`http://localhost:3000/api/users`,data);

        respone= await respone.json();
        if(respone.success){
            alert("new user add")
        }else{
            alert("some thing want worng")
        }
           console.log(respone)

    }
 
    

  return (

     <div className="form-container">
      <h1 className="form-title">Add New User</h1>

      <form >
         <input type="text" value={name} placeholder='name' onChange={(e)=>setName(e.target.value)}/>
          <input type="text" value={age} placeholder='email' onChange={(e)=>setAge(e.target.value)}/>
          <input type="text" value={email} placeholder='age' onChange={(e)=>setEmail(e.target.value)}/>
        <button onClick={addUser} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default page
          