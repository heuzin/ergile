import { UserButton } from "@/src/features/auth/components/user-button";
import { getCurrentUser } from "../features/auth/actions";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrentUser();

  if (!user) redirect("/sign-in");

  return (
    <div>
      <UserButton />
    </div>
  );
}
