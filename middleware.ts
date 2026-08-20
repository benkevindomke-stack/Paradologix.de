import { NextRequest, NextResponse } from "next/server";

const ignoredPaths = ["/_next", "/api", "/favicon.ico", "/robots.txt", "/sitemap.xml"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host")?.split(":")[0].toLowerCase() ?? "";

  if (ignoredPaths.some((path) => pathname.startsWith(path))) return NextResponse.next();

  const isInternationalDomain = host === "paradologix.com" || host === "www.paradologix.com";
  if (isInternationalDomain && !pathname.startsWith("/en")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = { matcher: ["/((?!_next/static|_next/image).*)"] };
