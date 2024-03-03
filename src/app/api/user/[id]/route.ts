import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import { useSearchParams } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(request: any, { params }: any) {
  try {
    const { id } = params;
    // const email = CryptoJS.AES.decrypt(decodeURIComponent(id), "").toString(
    //   CryptoJS.enc.Utf8
    // );
    // const { email } = await request.json();
    await connectMongoDB();
    const user = await User.findOne({ email: id });
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        messege: "Error fetching single user from GET params",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: any, { params }: any) {
  try {
    const { id } = params;
    await connectMongoDB();
    await User.findOneAndDelete({ email: id });
    return NextResponse.json(
      { messege: "Account deleted from server and db." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ messege: "Error: " + error }, { status: 200 });
  }
}
