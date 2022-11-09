import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { expenseRouter } from "./expense";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  expense: expenseRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
