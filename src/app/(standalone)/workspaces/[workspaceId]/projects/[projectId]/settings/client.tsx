"use client";

import { PageError } from "@/src/components/page-error";
import { PageLoader } from "@/src/components/page-loader";
import { useGetProject } from "@/src/features/projects/api/use-get-project";
import { EditProjectForm } from "@/src/features/projects/components/edit-project-form";
import { useProjectId } from "@/src/features/projects/hooks/use-project-id";

export const ProjectIdSettingsClient = () => {
  const projectId = useProjectId();
  const { data: initialValues, isLoading } = useGetProject({ projectId });

  if (isLoading) {
    return <PageLoader />;
  }

  if (!initialValues) {
    return <PageError message="Project not found" />;
  }

  return (
    <div className="w-full lg:max-w-xl">
      <EditProjectForm initialValues={initialValues} />
    </div>
  );
};
