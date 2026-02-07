import { auth0 } from "@/lib/auth0";

export const GET = auth0.handleAuth({
  login: auth0.handleLogin({
    returnTo: "/dashboard",
  }),
});
