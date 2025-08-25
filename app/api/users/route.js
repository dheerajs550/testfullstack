import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(){
    const data = user
    return NextResponse.json(data,{status:200})
}

export async function POST(request) {
    const data = await request.json()
    if(!data.name || !data.age){
    return NextResponse.json({result:"requst field not found", success:false} ,{status:404})
    }
    return NextResponse.json({result:"new user created", success:true}, {status:200})
}