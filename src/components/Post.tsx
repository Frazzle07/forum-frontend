import { ChatAltIcon } from '@heroicons/react/solid';

export type PostType = {
  key: string;
  title: string;
  author: string;
  createdAt: Date;
  lastReplied: Date;
};

export const Post = (props: PostType) => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 p-2 bg-black border rounded-full"></div>
        <div>
          <div className="text-2xl">{props.title}</div>
          <div>
            <span className="font-semibold">{props.author}</span> replied 4
            hours ago
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <ChatAltIcon className="w-8 h-8" />
      </div>
    </div>
  );
};
