import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import { getUserDetails } from "../../../admin/admin";
import { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
  callbacks: {
    async signIn({ user }) {
      try {
        const result = await getUserDetails(user.email!);
        if (result.isAdmin) {
          Object.assign(user, { ...user, ...result });
          return true;
        }
        return false;
      } catch (err) {
        return false;
      }
    },
    async redirect({ url, baseUrl }) {
      // If the sign-in is successful and a callbackUrl is provided, use it
      console.log(url);
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session = { ...session, ...token };
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
