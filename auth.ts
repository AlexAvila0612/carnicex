import Database from "better-sqlite3";
import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: new Database("database.db"),

  emailAndPassword: {
    enabled: true,
  },

  plugins: [nextCookies()],
});