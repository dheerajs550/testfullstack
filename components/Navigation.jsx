import Link from 'next/link'
import React from 'react'

function Navigation() {
  return (
    <>
    <nav  className=' nevbar1' >
    <div className=''> dheeraj sharma  </div>
        <ul className='nev2'>
            <li>
                <Link href='/'> Home</Link>
            </li>
             <li>
                <Link href='/about'> About</Link>
            </li>
             <li>
                <a href='/product'> Product</a>
            </li>
             <li>
                <Link href='/contect'> Contect</Link>
            </li>
             <li>
                <Link href='/adduser'> Add User</Link>
            </li>
              <li>
                <Link href='/addproduct'> Add Product</Link>
            </li>
             <li>
                <Link href='/addimage'> Add Image</Link>
            </li>
        </ul>
    </nav>
 
     </>
  )
}

export default Navigation