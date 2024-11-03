import { parseAsString, parseAsStringEnum, useQueryStates } from "nuqs";

import { TasksStatus } from "../type";

export const useTaskFilters = () => {
  return useQueryStates({
    projectId: parseAsString,
    status: parseAsStringEnum(Object.values(TasksStatus)),
    assigneeId: parseAsString,
    search: parseAsString,
    dueDate: parseAsString,
  });
};
