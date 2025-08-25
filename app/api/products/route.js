import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// const username = "dheeraj"
// const password = "12345Dheeraj"
// export const connectionSrt = "mongodb+srv://"+username+":"+password+"@cluster0.hxqglx0.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0"


export async function GET(){
let data =[]
let success =true
try {
    await mongoose.connect(connectionSrt)
     data = await Product.find();
} catch (error) {
  data={result:"error"}
  success=false
}
  return NextResponse.json({result:data, success:true})
}

export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(connectionSrt);
  let data = new Product(payload)
  const result = await data.save()
  return NextResponse.json({result, success: true})
}
