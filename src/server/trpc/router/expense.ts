import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const expenseRouter = router({
  create: publicProcedure
    .input(z.object({ description: z.string(), amount: z.number() }))
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.expense.create({
          data: {
            description: input.description,
            amount: input.amount,
          },
        });
      } catch (error) {
        console.log(error);
        return false;
      }

      return true;
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.expense.findMany();
  }),
});
