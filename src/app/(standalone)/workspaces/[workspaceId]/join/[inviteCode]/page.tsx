import React from "react";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/src/features/auth/queries";
import { getWorkspaceInfo } from "@/src/features/workspaces/queries";
import { JoinWorkspaceForm } from "@/src/features/workspaces/components/join-workspace-form";

interface WorkspaceIdJoinPagePageProps {
  params: { workspaceId: string };
}

const WorkspaceIdJoinPage = async ({
  params,
}: WorkspaceIdJoinPagePageProps) => {
  const user = await getCurrentUser();

  if (!user) redirect("/sign-in");

  const workspaceId = params.workspaceId;
  const initialValues = await getWorkspaceInfo({ workspaceId });

  if (!initialValues) {
    redirect("/");
  }

  return (
    <div className="w-full lg:max-w-xl">
      <JoinWorkspaceForm initialValues={initialValues} />
    </div>
  );
};

export default WorkspaceIdJoinPage;
