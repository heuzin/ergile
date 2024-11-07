import React from "react";
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/src/features/auth/queries";

import { ProjectIdClient } from "./client";

const ProjectIdPage = async () => {
  const user = await getCurrentUser();

  if (!user) redirect("/sign-in");

  return <ProjectIdClient />;
};

export default ProjectIdPage;
