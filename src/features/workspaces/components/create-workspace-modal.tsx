"use client";

import { ResponsiveModal } from "@/src/components/responsive-modal";
import { CreateWorkspaceForm } from "./create-workspace-form";

export const CreateWorkspaceModal = () => {
  return (
    <ResponsiveModal open onOpenChange={() => {}}>
      <CreateWorkspaceForm />
    </ResponsiveModal>
  );
};
