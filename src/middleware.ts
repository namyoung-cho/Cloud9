import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (!pathname.startsWith("/dashboard")) return NextResponse.next();

  const authed = req.cookies.get("dash_auth")?.value === "1";
  if (authed) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/";
  url.searchParams.set("next", "/dashboard");
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/dashboard/:path*"]
};

