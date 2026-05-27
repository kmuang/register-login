import { NextResponse } from "next/server";

type LoginBody = {
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as LoginBody;
  const email = body.email?.trim();
  const password = body.password ?? "";

  if (!email || !password) {
    return NextResponse.json(
      { message: "Please enter your email and password." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    message: `Login submitted for ${email}.`
  });
}
