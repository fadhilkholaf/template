import NextAuth, { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";

import { findUser } from "@/db/query/user";
import { compareHash } from "@/util/utils";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    username: string;
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  theme: {
    brandColor: "#fccee8",
    colorScheme: "light",
    logo: "/images/metadata/192x192.png",
  },
  providers: [
    Credentials({
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Username",
          required: true,
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
          required: true,
        },
      },
      authorize: async (credentials) => {
        const username = credentials.username as string;
        const password = credentials.password as string;

        const user = await findUser({ username });

        if (!user) {
          return null;
        }

        const isCorrectPassword = compareHash(password, user.password);

        if (!isCorrectPassword) {
          return null;
        }

        return {
          id: user.id,
          username: user.username,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token.id && session.user) {
        session.user.id = token.id;
        session.user.username = token.username;
      }
      return session;
    },
    async jwt({ token, user, trigger, session }) {
      if (user && user.id) {
        const existingUser = await findUser({ id: user.id });
        if (existingUser) {
          token.id = existingUser.id;
          token.username = existingUser.username;
        }
      }
      if (trigger === "update") {
        token.username = session.username;
        token.role = session.role;
      }
      return token;
    },
  },
  pages: {
    // newUser: "/signup",
    // signIn: "/signin",
    // signOut: "/signout",
  },
});
