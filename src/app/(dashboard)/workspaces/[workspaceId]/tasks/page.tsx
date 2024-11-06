import React from "react";
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/src/features/auth/queries";
import { TaskViewSwitcher } from "@/src/features/tasks/components/task-view-switcher";

const TasksPage = async () => {
  const user = await getCurrentUser();

  if (!user) redirect("/sign-in");
  return (
    <div className="h-full flex flex-col">
      <TaskViewSwitcher />
    </div>
  );
};

export default TasksPage;
