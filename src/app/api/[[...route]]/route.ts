import { Hono } from "hono";
import { handle } from "hono/vercel";

import auth from "@/src/features/auth/server/route";
import workspaces from "@/src/features/workspaces/server/route";

const app = new Hono().basePath("/api");

const routes = app.route("/auth", auth).route("/workspaces", workspaces);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
