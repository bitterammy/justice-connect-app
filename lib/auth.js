import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";
import { getUserByEmail, createUser } from "./db";

const googleEnabled = Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET);

export const authOptions = {
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  providers: [
    ...(googleEnabled
      ? [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          }),
        ]
      : []),
    CredentialsProvider({
      id: "admin-credentials",
      name: "Admin",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = await getUserByEmail(String(credentials.email).toLowerCase().trim());
        if (!user || user.role !== "admin" || !user.passwordHash) return null;
        const ok = await bcrypt.compare(credentials.password, user.passwordHash);
        if (!ok) return null;
        return { id: user.id, name: user.name, email: user.email, role: "admin", image: user.image };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google" && user.email) {
        const email = user.email.toLowerCase();
        let dbUser = await getUserByEmail(email);
        if (!dbUser) {
          dbUser = await createUser({
            id: randomUUID(),
            name: user.name,
            email,
            image: user.image,
            role: "customer",
          });
        }
        user.role = dbUser.role;
        user.dbId = dbUser.id;
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || "customer";
        token.uid = user.dbId || user.id;
      } else if (token.email && !token.role) {
        const dbUser = await getUserByEmail(token.email);
        if (dbUser) {
          token.role = dbUser.role;
          token.uid = dbUser.id;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role || "customer";
        session.user.id = token.uid || token.sub;
      }
      return session;
    },
  },
};

export const isGoogleEnabled = googleEnabled;
