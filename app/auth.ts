// app/auth.ts
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  secret: process.env.AUTH_SECRET,
})

export const GET = handlers.GET
export const POST = handlers.POST
