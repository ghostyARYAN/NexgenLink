export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/admin/:path*", "/api/auth/signin", "/api/auth/signup"],
};
