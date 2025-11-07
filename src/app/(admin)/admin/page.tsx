import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";

export default async function AdminLayout() {
  const session = await getServerSession(AuthOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  if (session.user.roleBasedURL) {
    redirect(session.user.roleBasedURL);
  }

  redirect(session.user.roleBasedURL);
}
