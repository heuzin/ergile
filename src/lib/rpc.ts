import { hc } from "hono/client";

import { AppType } from "@/src/app/api/[[...route]]/route";

export const client = hc<AppType>(process.env.NEXT_PUBLIC_APP_URL!);
