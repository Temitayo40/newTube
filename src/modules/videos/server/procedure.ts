import { db } from "@/db";
import { videos } from "@/db/schema";
import { createTRPCRouter, proptectedProcedure } from "@/trpc/init";

export const videosRouter = createTRPCRouter({
  create: proptectedProcedure.mutation(async ({ ctx }) => {
    const { id: userId } = ctx.user;

    const [video] = await db
      .insert(videos)
      .values({
        userId,
        title: "Untitled",
      })
      .returning();

    return { video: video };
  }),
});
