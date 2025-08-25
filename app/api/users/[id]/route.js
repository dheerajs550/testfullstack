import { user } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
  const userId= await params.id
  const userData = user.filter((item)=>item.id==userId)
    return NextResponse.json(userData.length==0?{result:"No Data Found", success:false}:{result:userData[0],success:true}, 
        {status:200})
}

