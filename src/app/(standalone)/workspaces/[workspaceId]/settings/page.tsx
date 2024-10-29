import React from "react";
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/src/features/auth/queries";
import { getWorkspace } from "@/src/features/workspaces/queries";
import { EditWorkspaceForm } from "@/src/features/workspaces/components/edit-workspace-form";

interface WorkspaceIdSettingsPageProps {
  params: { workspaceId: string };
}

const WorkspaceIdSettingsPage = async ({
  params,
}: WorkspaceIdSettingsPageProps) => {
  const user = await getCurrentUser();

  if (!user) redirect("/sign-in");

  const initialValues = await getWorkspace({ workspaceId: params.workspaceId });

  if (!initialValues) {
    redirect(`/workspaces/${params.workspaceId}`);
  }

  return (
    <div className="w-full lg:max-w-xl">
      <EditWorkspaceForm initialValues={initialValues} />
    </div>
  );
};

export default WorkspaceIdSettingsPage;
