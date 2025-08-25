
import '../globals.css'
import Link from 'next/link'
import React from 'react'
function About() {
  return (
    <>
    <h1 className='mb-5'>this is About us page</h1>

     <Link className=' className="inline-block bg-red-600 text-white font-semibold py-2 px-4  rounded hover:bg-blue-700 transition-all" ml-5' href='/'> Home</Link>
    </>
  )
}

export default About