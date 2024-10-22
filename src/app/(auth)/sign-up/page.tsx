import React from "react";
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/src/features/auth/actions";
import { SignUpCard } from "@/src/features/auth/components/sign-up-card";

const SignUpPage = async () => {
  const user = await getCurrentUser();

  if (user) {
    redirect("/");
  }

  return <SignUpCard />;
};

export default SignUpPage;
