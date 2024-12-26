import { NextResponse } from "next/server";
import { getGroqRespones } from "@/app/utils/Groq";

export async function POST(req: Request) {
  try {
    const { message } = await req.json()
    const response  = await getGroqRespones(message)
    return NextResponse.json({message : response})
  } catch (error) {


  }
}
