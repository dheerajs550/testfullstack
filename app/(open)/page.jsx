import Image from "next/image";
import styles from "../page.module.css";
import About from "./about/page";
import Link from "next/link";
import { apiData } from "@/apiroute/page";

export const dynamic = 'force-dynamic';

export default async function Home() {

  const users = await apiData()
  
  return (
    <div className={`${styles.page}mt-55  m-auto w-full text-center`} >
      <h1> this is list</h1>
     {users.map((data, index)=>(
      <Link href={`user/${data.id}`} key={data.id}>
      <h1 className="text-amber-300 bg-red">  {data.name}</h1>
      </Link>

      )) }
       
      
    </div>
  );
}