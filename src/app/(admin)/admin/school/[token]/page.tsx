import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import React from "react";
import WelcomeHeader from "./_components/welcome_header";
import RecentCampaign from "./_components/recent-campaign";
// import { CircularProgressIndicator } from "@/components/ui/CircularProgressIndicator";

type Params = {
  token: string;
};

export default async function SchoolDashboard({ params }: { params: Promise<Params> }) {
  const { token } = await params;
  const session = await getServerSession(AuthOptions);

  if (!session || !session.user) {
    return (
      <div className="flex items-center justify-center h-full text-red-500">
        Unauthorized Access
      </div >
    );
  }

  return (
    <div className="p-6 space-y-8">
      <WelcomeHeader session={session} name={session.user.name} />
      <RecentCampaign />
    </div >
  )
}