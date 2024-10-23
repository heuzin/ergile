import { redirect } from "next/navigation";
import { getCurrentUser } from "@/src/features/auth/actions";

export default async function Home() {
  const user = await getCurrentUser();

  if (!user) redirect("/sign-in");

  return <div>This is a home page</div>;
}
