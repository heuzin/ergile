"use client";

import Link from "next/link";
import { PencilIcon } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { PageError } from "@/src/components/page-error";
import { PageLoader } from "@/src/components/page-loader";

import { useProjectId } from "@/src/features/projects/hooks/use-project-id";
import { useGetProject } from "@/src/features/projects/api/use-get-project";
import { ProjectAvatar } from "@/src/features/projects/components/project-avatar";
import { TaskViewSwitcher } from "@/src/features/tasks/components/task-view-switcher";

export const ProjectIdClient = () => {
  const projectId = useProjectId();
  const { data, isLoading } = useGetProject({ projectId });

  if (isLoading) {
    return <PageLoader />;
  }

  if (!data) {
    return <PageError message="Project not found" />;
  }

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <ProjectAvatar
            name={data.name}
            image={data.imageUrl}
            className="size-8"
          />
          <p className="text-lf font-semibold">{data.name}</p>
        </div>
        <div>
          <Button variant={"secondary"} size={"sm"} asChild>
            <Link
              href={`/workspaces/${data.workspaceId}/projects/${data.$id}/settings`}
            >
              <PencilIcon className="size-4 mr-2" />
              Edit Project
            </Link>
          </Button>
        </div>
      </div>
      <TaskViewSwitcher hideProjectFilter />
    </div>
  );
};
