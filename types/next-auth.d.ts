import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    name: string;
    role: string;
    permissions: string[];
    status: string;
    createdAt: Date;
    updatedAt: Date;
    token?: string; // For doctors
    pincode?: string; // For schools and users/students
    state?: string; // For schools and users/students
    roleBasedURL: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
      permissions: string[];
      status: string;
      createdAt: Date;
      updatedAt: Date;
      token?: string;
      pincode?: string;
      state?: string;
      roleBasedURL: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    email: string;
    name: string;
    role: string;
    permissions: string[];
    status: string;
    createdAt: Date;
    updatedAt: Date;
    token?: string;
    pincode?: string;
    state?: string;
  }
}
