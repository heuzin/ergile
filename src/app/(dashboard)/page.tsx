import { redirect } from "next/navigation";
import { getCurrentUser } from "@/src/features/auth/queries";
import { getWorkspaces } from "@/src/features/workspaces/queries";

export default async function Home() {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in");

  const workspaces = await getWorkspaces();
  if (workspaces?.total === 0) {
    redirect("/workspaces/create");
  } else {
    redirect(`/workspaces/${workspaces?.documents[0].$id}`);
  }
}
