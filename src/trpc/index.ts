import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server';
import { publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';

export const appRouter =router ({
  authCallback: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession()
    const user = getUser()

    if (!user.id || !user.email)
      throw new TRPCError({ code: 'UNAUTHORIZED' 
});

export type  appRouter = typeof appRouter;