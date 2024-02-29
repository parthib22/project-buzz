import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn(params: any) {
      const { user, account } = params;
      const { image, name, email } = user;
      if (account?.provider === "google") {
        try {
          await connectMongoDB();
          if (!(await User.findOne({ email }))) {
            const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user`, {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({ image, name, email }),
            });
            if (res.ok) return user;
          }
        } catch (error) {
          console.error("Error registering user: ", error);
        }
      }
      return user;
    },
  },
  pages: {
    signIn: "/",
    error: "/error",
    signOut: "/",
  },
});

export { handler as GET, handler as POST };
