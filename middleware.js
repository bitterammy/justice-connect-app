import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const role = req.nextauth?.token?.role;

    // Admin area: only admins (login/setup/forgot/reset pages are public)
    if (pathname.startsWith("/admin")) {
      if (
        pathname === "/admin/login" ||
        pathname === "/admin/setup" ||
        pathname === "/admin/forgot-password" ||
        pathname === "/admin/reset-password"
      ) {
        if (role === "admin" && pathname === "/admin/login") {
          return NextResponse.redirect(new URL("/admin/dashboard", req.url));
        }
        return NextResponse.next();
      }
      if (role !== "admin") {
        const url = new URL("/admin/login", req.url);
        url.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(url);
      }
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;
        // Public admin pages
        if (
          pathname === "/admin/login" ||
          pathname === "/admin/setup" ||
          pathname === "/admin/forgot-password" ||
          pathname === "/admin/reset-password" ||
          pathname === "/login"
        ) return true;
        if (pathname.startsWith("/admin")) return token?.role === "admin";
        // User pages require any signed-in user
        if (["/favorites", "/appointments", "/profile"].some((p) => pathname === p || pathname.startsWith(p + "/"))) {
          return !!token;
        }
        return true;
      },
    },
    pages: { signIn: "/login" },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/favorites/:path*", "/appointments/:path*", "/profile/:path*"],
};
