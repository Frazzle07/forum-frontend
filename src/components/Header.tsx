import { HomeIcon } from '@heroicons/react/solid';

export const Header = () => {
  return (
    <div className="flex justify-center w-full h-20 border-b-2">
      <div className="flex items-center justify-between w-full p-2 mx-auto xl:max-w-6xl md:max-w-3xl">
        <div className="flex items-center justify-center">
          <HomeIcon className="w-5 h-5" />
          <h1 className="ml-4">AWESOME FORUM</h1>
        </div>
        <div>
          <div className="">Login</div>
        </div>
      </div>
    </div>
  );
};
