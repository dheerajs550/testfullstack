import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

//use this api  for data updatting 
export async function PUT(request, content) {
    const productId = content.params.productid;
    const filter ={_id:productId}
    const payload = await request.json()
    console.log(payload," payload....")
    await mongoose.connect(connectionSrt);
    const result = await Product.findOneAndUpdate(filter,payload)
    // let result = [];
    return NextResponse.json({result,success:"success"})
    
}

// USE THIS API for prifill data in from input fild
export async function GET(request, content) {
    const productId = content.params.productid;
    const record ={_id:productId}
    await mongoose.connect(connectionSrt);
    const result = await Product.findById(record)
    return NextResponse.json({result,success:"success"})
}

// use this api for Delet Data fom datalist
export async function DELETE(request,content) {
    const productId = content.params.productid;
    const record = {_id:productId}
    await mongoose.connect(connectionSrt);
    const result = await Product.deleteOne(record);
    return NextResponse.json({result, success:true})
    
}