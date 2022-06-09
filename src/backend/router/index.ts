import * as trpc from "@trpc/server";
import { z } from "zod";
import { prisma } from "@/backend/utils/prisma";

import { PokemonClient } from "pokenode-ts";

export const appRouter = trpc
  .router()
  .query("get-pokemon-by-id", {
    input: z.object({ id: z.number() }),
    async resolve({ input }) {
      const pokemonApi = new PokemonClient();

      const pokemon = await pokemonApi.getPokemonById(input.id);
      return { name: pokemon.name, sprites: pokemon.sprites };
    },
  })
  .mutation("cast-vote", {
    input: z.object({
      votedFor: z.number(),
      votedAgainst: z.number(),
    }),
    async resolve({ input }) {
      const voteinDb = await prisma.vote.create({
        data: {
          ...input,
        },
      });
      return { success: true, vote: voteinDb };
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;
