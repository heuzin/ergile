import React from "react";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/src/features/auth/queries";
import { ProjectIdSettingsClient } from "./client";

const ProjectIdSettingsPage = async () => {
  const user = await getCurrentUser();

  if (!user) redirect("/sign-in");

  return <ProjectIdSettingsClient />;
};

export default ProjectIdSettingsPage;
