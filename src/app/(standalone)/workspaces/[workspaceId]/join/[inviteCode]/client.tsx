"use client";

import { PageError } from "@/src/components/page-error";
import { PageLoader } from "@/src/components/page-loader";
import { useGetWorkspaceInfo } from "@/src/features/workspaces/api/use-get-workspace-info";
import { JoinWorkspaceForm } from "@/src/features/workspaces/components/join-workspace-form";
import { useWorkspaceId } from "@/src/features/workspaces/hooks/use-workspace-id";

export const WorkspaceIdJoinClient = () => {
  const workspaceId = useWorkspaceId();
  const { data: initialValues, isLoading } = useGetWorkspaceInfo({
    workspaceId,
  });

  if (isLoading) {
    return <PageLoader />;
  }

  if (!initialValues) {
    return <PageError message="Workspace not found" />;
  }

  return (
    <div className="w-full lg:max-w-xl">
      <JoinWorkspaceForm initialValues={initialValues} />
    </div>
  );
};
