export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/category",
    "/quiz",
    "/result",
    "/leaderboard",
    "/error",
    "/account/:id*",
  ],
};
