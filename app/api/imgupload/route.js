import { NextResponse } from "next/server";
import {writeFile} from 'fs/promises'
export async function POST(request, content){
    const data = await request.formData()
    const file = data.get("file");
    if(!file){
        return NextResponse.json({"message":"no image found", success:false})
    }
    const byteDate = await file.arrayBuffer();
    const buffer = Buffer.from(byteDate);
    const path = `./public/${file.name}`
    await writeFile(path,buffer);
    return NextResponse.json({"meesage":"file uploaded", success:true})


}