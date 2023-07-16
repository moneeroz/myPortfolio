import { EmailTemplate } from "@/components/email-template";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export async function GET(req: NextRequest) {
  const searchParams = new URLSearchParams(req.nextUrl.searchParams);
  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");
  const email = searchParams.get("email");
  const message = searchParams.get("message");

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: "missing inputs" }, { status: 400 });
  }

  try {
    const data = await resend.emails.send({
      from: "Moneer <onboarding@resend.dev>",
      to: "eng.moneeralromimah@gmail.com",
      subject: "Hello world",
      react: EmailTemplate({ firstName, lastName, email, message }),
      text: "",
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 },
    );
  }
}
