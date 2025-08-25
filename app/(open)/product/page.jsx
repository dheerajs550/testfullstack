"use client";
import React, { useState, useEffect } from 'react';
import DelereBtn from '@/components/DelereBtn';
import { apiData } from '@/servises/prodactApiCall';
import Image from 'next/image';
import Link from 'next/link';

const Prodect = () => {
  // searchParams ko direct destructure kar lo
  // const category = searchParams?.category || "all";
  // const page = searchParams?.page || 1;
  // const sort = searchParams?.sort || "default";

  const [users, setUsers] = useState({ result: [] });

  // Load users from API
  //  const fetchData = async () => {
  //     try {
  //       const data = await apiData();
  //       setUsers(data);
  //     } catch (error) {
  //       console.error("API fetch error:", error);
  //     }
  //   };

  useEffect(() => {
    // we can also  use fetchData function here ... 
    // ham yaha bhi likh sakte he ise pr hane delete button me call  krna the to alag likh he yaha call kiya
 const fetchData = async () => {
      try {
        const data = await apiData();
        setUsers(data);
      } catch (error) {
        console.error("API fetch error:", error);
      }
    };
    fetchData();
  }, []);
console.log(users ,"...this")
  return (
<>
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Product List</h1>

    <div className="overflow-x-auto">
      <table className="w-full border border-blue-400 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-blue-400 px-4 py-2">Serial No.</th>
            <th className="border border-blue-400 px-4 py-2">Name</th>
            <th className="border border-blue-400 px-4 py-2">Price</th>
            <th className="border border-blue-400 px-4 py-2">Company</th>
            <th className="border border-blue-400 px-4 py-2">Color</th>
            <th className="border border-blue-400 px-4 py-2">Category</th>
            <th className="border border-blue-400 px-4 py-2">Image</th>

            <th className="border border-blue-400 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.result.map((u, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="border border-blue-400 px-4 py-2">A{i + 1}</td>
              <td className="border border-blue-400 px-4 py-2">{u.name}</td>
              <td className="border border-blue-400 px-4 py-2">{u.price}</td>
              <td className="border border-blue-400 px-4 py-2">{u.company}</td>
              <td className="border border-blue-400 px-4 py-2">{u.color}</td>
              <td className="border border-blue-400 px-4 py-2">{u.category}</td>
              <td className="border border-blue-400 px-4 py-2">
                <Image src={`${u.imgurl|| "/file.svg"}`} height={50} width={50} alt='img'/>
              </td>

              <td className="border border-blue-400 px-4 py-2 flex gap-2">
                {/* Edit button */}
                <Link href={`/product/${u._id}`}>
                <button className="bg-yellow-400 p-2 rounded hover:bg-yellow-500">
                  ✏️
                </button>
                </Link>
                {/* Delete button */}
                <DelereBtn 
                id={u._id} 
                // onDelete={fetchData}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Pagination Example */}
    <div className="flex justify-between items-center mt-4">
      <p className="text-sm text-gray-600">
        Showing 1 to {users.result.length} of {users.result.length} Entries
      </p>
      <div className="flex gap-2">
        <button className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300">
          Previous
        </button>
        <button className="px-3 py-1 border rounded bg-red-500 text-white">
          1
        </button>
        <button className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300">
          Next
        </button>
      </div>
    </div>
  </div>
</>


  );
};

export default Prodect;
