import React from "react";
import { redirect } from "next/navigation";

import { TaskIdClient } from "./client";
import { getCurrentUser } from "@/src/features/auth/queries";

const TaskIdPage = async () => {
  const user = await getCurrentUser();

  if (!user) redirect("/sigin-in");

  return <TaskIdClient />;
};

export default TaskIdPage;
