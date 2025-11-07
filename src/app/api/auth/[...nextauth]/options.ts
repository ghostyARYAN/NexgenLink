import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

const userData = {
  admin: {
    id: "admin",
    email: "admin@example.com",
    password: "admin123",
    name: "Admin",
    role: "admin",
    token: "abc123xyz789",
    permissions: ["read", "write", "delete"],
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  doctor: {
    id: "doctor",
    email: "doctor@example.com",
    password: "doctor123",
    name: "Dr. John Smith",
    role: "doctor",
    permissions: ["read"],
    status: "active",
    token: "abc123xyz789", // Random token for doctor
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  school: {
    id: "school",
    email: "school@example.com",
    password: "school123",
    name: "Green Valley School",
    role: "school",
    permissions: ["read"],
    token: "abc123xyz789",
    status: "active",
    pincode: "110001",
    state: "delhi",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  student: {
    id: "student",
    email: "student@example.com",
    password: "student123",
    name: "Jane Student",
    role: "student",
    token: "abc123xyz789",
    permissions: ["read"],
    status: "active",
    pincode: "400001",
    state: "maharashtra",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};

// Helper function to generate role-based URLs
function generateRoleBasedURL(user: any): string {
  const baseURL = "/admin";

  switch (user.role) {
    case "admin":
      return `${baseURL}/${user.token}`;

    case "doctor":
      const doctorName = user.name.toLowerCase().replace(/[^a-z0-9]/g, "");
      return `${baseURL}/doctors/${user.token}`;

    case "school":
      const schoolName = user.name.toLowerCase().replace(/[^a-z0-9]/g, "");
      return `${baseURL}/school/${user.token}`;

    case "student":
      const userName = user.name.toLowerCase().replace(/[^a-z0-9]/g, "");
      return `${baseURL}/users/${user.token}`;

    default:
      return `${baseURL}`;
  }
}

async function getUserByEmailAndPassword(email: string, password: string) {
  const user = Object.values(userData).find((u) => u.email === email);

  if (user && user.password === password) {
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  return null;
}

export const AuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: { email: string; password: string } | undefined,
      ) {
        if (!credentials) return null;
        const user = await getUserByEmailAndPassword(
          credentials.email,
          credentials.password,
        );
        if (user) {
          return user;
        } else {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      try {
        // Parse the incoming URL relative to baseUrl so we can inspect query params
        const parsed = new URL(url, baseUrl);

        // If a callbackUrl is provided (common after signin), prefer it when it's internal
        const callbackUrl = parsed.searchParams.get("callbackUrl");
        if (callbackUrl) {
          // Relative callback (starts with "/")
          if (callbackUrl.startsWith("/")) return `${baseUrl}${callbackUrl}`;
          // Absolute and same origin
          if (callbackUrl.startsWith(baseUrl)) return callbackUrl;
        }

        // Also support an explicit roleBasedURL query parameter if set by the signin page
        const roleBasedURL =
          parsed.searchParams.get("roleBasedURL") ||
          parsed.searchParams.get("roleBasedUrl") ||
          parsed.searchParams.get("role_based_url");
        if (roleBasedURL) {
          if (roleBasedURL.startsWith("/")) return `${baseUrl}${roleBasedURL}`;
          if (roleBasedURL.startsWith(baseUrl)) return roleBasedURL;
        }
      } catch (e) {
        // If URL parsing fails for any reason, fall back to default handling below
      }

      // Default handling:
      // - If the URL is already on the same origin, allow it
      // - If it's a relative path, prefix with baseUrl
      // - Otherwise, send user to baseUrl
      if (url.startsWith(baseUrl)) return url;
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      return baseUrl;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id as string,
          email: token.email as string,
          name: token.name as string,
          role: token.role as string,
          permissions: token.permissions as string[],
          status: token.status as string,
          createdAt: token.createdAt as Date,
          updatedAt: token.updatedAt as Date,
          // Optional fields based on role
          token: token.token as string,
          pincode: token.pincode as string,
          state: token.state as string,
          roleBasedURL: token.roleBasedURL as string,
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
        token.permissions = user.permissions;
        token.status = user.status;
        token.createdAt = user.createdAt;
        token.updatedAt = user.updatedAt;

        // Add role-specific fields
        if (user.token) token.token = user.token;
        if (user.pincode) token.pincode = user.pincode;
        if (user.state) token.state = user.state;

        // Generate role-based URL
        token.roleBasedURL = generateRoleBasedURL(user);
      }
      return token;
    },
  },
  pages: {
    signIn: "/api/auth/signin",
    newUser: "/api/auth/signup",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export { generateRoleBasedURL };
