import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes: ['/page.tsx'],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
