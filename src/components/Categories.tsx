import { trpc } from '../utils/trpc';

export const Categories = () => {
  const categories = trpc.useQuery(['categories.all']);

  if (!categories.data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full p-2 mx-auto mt-10 xl:max-w-6xl md:max-w-3xl">
      <div className="flex flex-col w-full space-y-8">Category</div>
    </div>
  );
};
