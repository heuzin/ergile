import React from "react";

import { getCurrentUser } from "@/src/features/auth/queries";
import { redirect } from "next/navigation";
import { MembersList } from "@/src/features/workspaces/components/members-list";

const WorkspaceIdMembersPage = async () => {
  const user = await getCurrentUser();

  if (!user) redirect("/sign-in");

  return (
    <div className="w-full lg:max-w-xl">
      <MembersList />
    </div>
  );
};

export default WorkspaceIdMembersPage;
