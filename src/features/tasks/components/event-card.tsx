import { useRouter } from "next/navigation";

import { cn } from "@/src/lib/utils";

import { TasksStatus } from "../type";
import { Project } from "../../projects/types";
import { MemberAvatar } from "../../members/components/member-avatar";
import { ProjectAvatar } from "../../projects/components/project-avatar";
import { useWorkspaceId } from "../../workspaces/hooks/use-workspace-id";
import { Member } from "../../members/types";

interface EventCardProps {
  title: string;
  assignee: Member;
  project: Project;
  status: TasksStatus;
  id: string;
}

const statusColorMap: Record<TasksStatus, string> = {
  [TasksStatus.BACKLOG]: "border-l-pink-500",
  [TasksStatus.TODO]: "border-l-red-500",
  [TasksStatus.IN_PROGRESS]: "border-l-yellow-500",
  [TasksStatus.IN_REVIEW]: "border-l-blue-500",
  [TasksStatus.DONE]: "border-l-emerald-500",
};

export const EventCard = ({
  title,
  assignee,
  project,
  status,
  id,
}: EventCardProps) => {
  const workspaceId = useWorkspaceId();
  const router = useRouter();

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    router.push(`/workspaces/${workspaceId}/tasks/${id}`);
  };
  return (
    <div className="px-2">
      <div
        onClick={onClick}
        className={cn(
          "p-1.5 text-xm bg-white text-primary border rounded-md border-l-4 flex flex-col gap-y-1.5 cursor-pointer hover:opacity-75 transition",
          statusColorMap[status]
        )}
      >
        <p>{title}</p>
        <div className="flex items-center gap-x-1">
          <MemberAvatar name={assignee?.name} />
          <div className="size-1 rounded-full bg-neutral-300" />
          <ProjectAvatar name={project?.name} image={project?.imageUrl} />
        </div>
      </div>
    </div>
  );
};
