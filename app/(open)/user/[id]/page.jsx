import { apiData } from '@/apiroute/page'
import React from 'react'


async function page({params}) {
   const userId = await params?.id
   const user = await apiData(userId)
  
  console.log(user.result.name,"....")
  return (
    <div className='w-full flex  justify-center '>

  <div className=' bg-amber-500 border w-100 text-center mt-55 p-10 m-auto rounded-3xl shadow text-white text-2xl '>
    <div>{user.result.name}</div>
    <div>{user.result.email}</div>
    <div>{user.result.age}</div>
    <div>{user.result.password}</div>


  </div>
    </div>
  
  )
}

export default page