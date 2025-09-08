import { z } from "zod";
import { createTRPCRouter, proptectedProcedure } from "../init";
export const appRouter = createTRPCRouter({
  hello: proptectedProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      console.log({ dbuser: opts.ctx.user });
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
