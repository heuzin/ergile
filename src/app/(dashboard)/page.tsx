import { redirect } from "next/navigation";
import { getCurrentUser } from "@/src/features/auth/actions";
import { CreateWorkspaceForm } from "@/src/features/workspaces/components/create-workspace-form";

export default async function Home() {
  const user = await getCurrentUser();

  if (!user) redirect("/sign-in");

  return (
    <div className="bg-neutral-500 p-4 h-full">
      <CreateWorkspaceForm />
    </div>
  );
}
