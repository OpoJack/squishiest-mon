import { appRouter } from "@/backend/router";
import * as trpcNext from "@trpc/server/adapters/next";

//API endpoint
// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
