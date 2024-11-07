import React from "react";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/src/features/auth/queries";
import { WorkspaceIdJoinClient } from "./client";

const WorkspaceIdJoinPage = async () => {
  const user = await getCurrentUser();

  if (!user) redirect("/sign-in");

  return <WorkspaceIdJoinClient />;
};

export default WorkspaceIdJoinPage;
