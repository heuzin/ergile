import { z } from "zod";
import { TasksStatus } from "./type";

export const createTaskSchema = z.object({
  name: z.string().trim().min(1, "Required"),
  status: z.nativeEnum(TasksStatus, { required_error: "Required" }),
  workspaceId: z.string().trim().min(1, "Required"),
  projectId: z.string().trim().min(1, "Required"),
  dueDate: z.coerce.date(),
  assigneeId: z.string().trim().min(1, "Required"),
  description: z.string().optional(),
});

export const getTaskSchema = z.object({
  workspaceId: z.string(),
  projectId: z.string().nullish(),
  assigneeId: z.string().nullish(),
  status: z.nativeEnum(TasksStatus).nullish(),
  search: z.string().nullish(),
  dueDate: z.string().nullish(),
});

export const taskBuilkUpdate = z.object({
  tasks: z.array(
    z.object({
      $id: z.string(),
      status: z.nativeEnum(TasksStatus),
      position: z.number().int().positive().min(1000).max(1_000_000),
    })
  ),
});
