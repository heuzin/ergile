import React from "react";
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/src/features/auth/queries";
import { WorkpaceIdClient } from "./client";

const WorkspaceIdPage = async () => {
  const user = await getCurrentUser();

  if (!user) redirect("/sign-in");

  return <WorkpaceIdClient />;
};

export default WorkspaceIdPage;
