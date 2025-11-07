import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/custom/app-sidebar";
import { redirect } from "next/navigation";
import AdminHeader from "@/components/custom/admin-header";
import { BreadcrumbComponents } from "@/components/custom/breadcrumb";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(AuthOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <SidebarProvider>
      <AppSidebar
        user={session.user}
        role={session?.user.role}
        roleBasedURL={session?.user.roleBasedURL || ""}
      />

      <main className="flex-1 select-none">
        <AdminHeader user={session.user} />
        <BreadcrumbComponents />
        {children}
      </main>
    </SidebarProvider>
  );
}
