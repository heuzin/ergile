"use client";

import { PageError } from "@/src/components/page-error";
import { PageLoader } from "@/src/components/page-loader";

import { useGetTask } from "@/src/features/tasks/api/use-get-task";
import { useTaskId } from "@/src/features/tasks/hooks/use-task-id";

import { DottedSeparator } from "@/src/components/detted-separator";
import { TaskOverview } from "@/src/features/tasks/components/task-overview";
import { TaskBreadcrumbs } from "@/src/features/tasks/components/task-breadcrumbs";
import { TaskDescription } from "@/src/features/tasks/components/task-description";

export const TaskIdClient = () => {
  const taskId = useTaskId();
  const { data, isLoading } = useGetTask({ taskId });

  if (isLoading) {
    return <PageLoader />;
  }

  if (!data) {
    return <PageError message="Task not found" />;
  }

  return (
    <div className="flex flex-col">
      <TaskBreadcrumbs project={data.project} task={data} />
      <DottedSeparator className="my-6" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TaskOverview task={data} />
        <TaskDescription task={data} />
      </div>
    </div>
  );
};
