import React from "react";
import { redirect } from "next/navigation";

import { SignInCard } from "@/src/features/auth/components/sign-in-card";
import { getCurrentUser } from "@/src/features/auth/actions";

const SignInPage = async () => {
  const user = await getCurrentUser();

  if (user) {
    redirect("/");
  }

  return <SignInCard />;
};

export default SignInPage;
