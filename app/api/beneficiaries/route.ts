import Beneficiarie from "@/lib/models/beneficiarie.model";
import { connectToDB } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, age, city, image } = await request.json();

  await connectToDB();
  await Beneficiarie.create({
    name,
    age,
    city,
    image,
  });

  return NextResponse.json({ message: "ok" }, { status: 200 });
}
