import { getOptionsForVote } from "@/utils/getRandomPokemon";
import { trpc } from "@/utils/trpc";
import { useState } from "react";
const btn =
  "inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

export default function Home() {
  const [ids, updateIds] = useState(getOptionsForVote());

  const [first, second] = ids;

  const firstPokemon = trpc.useQuery(["get-pokemon-by-id", { id: first }]);
  const secondPokemon = trpc.useQuery(["get-pokemon-by-id", { id: second }]);

  const voteForUgly = (selected: number) => {
    //todo: fire mutation to persist changes
    updateIds(getOptionsForVote());
  };

  if (firstPokemon.isLoading || secondPokemon.isLoading) return null;
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <div className='text-2xl text-center'>Which Pokémon is Uglier?</div>
      <div className='p-2' />
      <div className='border rounded p-8 flex justify-between items-center max-w-2xl'>
        <div className='w-64 h-64 flex flex-col items-center'>
          <img
            alt={firstPokemon.data?.name}
            src={firstPokemon.data?.sprites.front_default}
            className='w-full'
          />
          <div className='text-xl text-center capitalize'>
            {firstPokemon.data?.name}
          </div>
          <button className={btn} onClick={() => voteForUgly(first)}>
            Uglier
          </button>
        </div>
        <div className='p-8'>Vs</div>
        <div className='w-64 h-64 flex flex-col items-center'>
          <img
            alt={secondPokemon.data?.name}
            src={secondPokemon.data?.sprites.front_default}
            className='w-full'
          />
          <div className='text-xl text-center capitalize'>
            {secondPokemon.data?.name}
          </div>
          <button className={btn} onClick={() => voteForUgly(first)}>
            Uglier
          </button>
        </div>
        <div className='p-2' />
      </div>
    </div>
  );
}
