import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { image, name, email } = await request.json();
  await connectMongoDB();
  await User.create({ image, name, email });
  return NextResponse.json({ message: "User created." }, { status: 200 });
}
