import { trpc } from "@/utils/trpc";

export default function Home() {
  const { data, isLoading } = trpc.useQuery(["hello", { text: "Theo" }]);

  if (isLoading) return <div>Loading...</div>;

  if (data) return <div>{data.greeting}</div>;
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <div className='text-2xl text-center'>Which Pokémon is Uglier?</div>
      <div className='p-2' />
      <div className='border rounded p-8 flex justify-between items-center max-w-2xl'>
        <div className='w-16 h-16 bg-red-200'>x</div>
        <div className='p-8'>Vs</div>
        <div className='w-16 h-16 bg-red-200'>y</div>
      </div>
    </div>
  );
}
