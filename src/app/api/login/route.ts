import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = (await req.json().catch(() => ({}))) as {
    password?: string;
  };

  const expectedPassword = process.env.NEXT_PUBLIC_SITE_PASSWORD;
  if (!expectedPassword) {
    return NextResponse.json(
      { ok: false, message: "서버 설정 오류가 발생했습니다." },
      { status: 500 }
    );
  }

  if (password !== expectedPassword) {
    return NextResponse.json(
      { ok: false, message: "비밀번호가 올바르지 않습니다." },
      { status: 401 }
    );
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: "dash_auth",
    value: "1",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8
  });
  return res;
}

