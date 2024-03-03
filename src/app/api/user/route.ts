import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { image, name, email } = await request.json();
  try {
    await connectMongoDB();
    await User.create({ image, name, email });
    return NextResponse.json({ message: "User created." }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { messege: `Error occured while posting auth data: ${error}` },
      { status: 500 }
    );
  }
}

export async function PUT(request: any) {
  const { email, topic, result, answer } = await request.json();
  try {
    await connectMongoDB();
    const user = await User.findOne({ email });
    await user.round.push({ topic: topic, result: result, answer: answer });
    await user.save();
    return NextResponse.json(
      { message: "Round data push successful." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Error occured during result data push: ${error}` },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const user = await User.find();
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json(
      { messege: "Cannot GET user form databse." },
      { status: 500 }
    );
  }
}
