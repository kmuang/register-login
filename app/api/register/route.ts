import { NextResponse } from "next/server";

type RegisterBody = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as RegisterBody;
  const name = body.name?.trim();
  const email = body.email?.trim();
  const password = body.password ?? "";
  const confirmPassword = body.confirmPassword ?? "";

  if (!name || !email || !password || !confirmPassword) {
    return NextResponse.json(
      { message: "Please fill in every required field." },
      { status: 400 }
    );
  }

  if (password !== confirmPassword) {
    return NextResponse.json(
      { message: "Passwords do not match." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    message: `Registration submitted for ${name}.`
  });
}
