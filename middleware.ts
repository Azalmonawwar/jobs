import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/";

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  // if (!isPublicPath && !token) {
  //   const isAuth = await getUserByToken()
  //   if(isAuth.status === false){
  //   return NextResponse.redirect(new URL("/login", request.nextUrl));

  //   }
  // }
}
/// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/login",
    "/dashboard",
    "/students",
    "/job",
    "/student",
    "/companies",
    "/company",
    "/jobs",
    "/job/:path*",
    "/profile/:path*",
    "/reset-password/:path*",
    "/forgotpassword/:path*",
  ],
};
