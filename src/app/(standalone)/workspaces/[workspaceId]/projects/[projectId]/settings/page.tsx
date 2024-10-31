import React from "react";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/src/features/auth/queries";
import { getProject } from "@/src/features/projects/queries";
import { EditProjectForm } from "@/src/features/projects/components/edit-project-form";

interface ProjectIdSettingsPageProps {
  params: { projectId: string };
}

const ProjectIdSettingsPage = async ({
  params,
}: ProjectIdSettingsPageProps) => {
  const user = await getCurrentUser();

  if (!user) redirect("/sign-in");

  const initialValues = await getProject({
    projectId: params.projectId,
  });

  return (
    <div>
      <EditProjectForm initialValues={initialValues} />
    </div>
  );
};

export default ProjectIdSettingsPage;
