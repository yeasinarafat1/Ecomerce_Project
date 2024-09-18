import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
// Your own logic for dealing with plaintext password strings; be careful!
import User from "@/DB/Models/User";
import bcrypt from "bcryptjs";
import { dbcon } from "./DB/dbcon";
import credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // callbacks: {
  //   authorized: async ({ auth }) => {
  //     // Logged in users are authenticated, otherwise redirect to login page
  //     return !!auth;
  //   },
  // },

  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },

  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async ({ email, password }) => {
        try {
          await dbcon();
        } catch (error) {
          console.log(error);
        }
        const user = await User.findOne({ email });
        if (user) {
          let isCorrectPassword = await bcrypt.compare(
            password as string,
            user?.password || ""
          );
          if (isCorrectPassword) {
            return user;
          } else {
            return null;
          }
        } else {
          return null;
        }
      }, //
    }),
  ],
});
