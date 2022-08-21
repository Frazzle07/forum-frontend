import { useState } from 'react';
import { Post, PostType } from './Post';
import { trpc } from '../utils/trpc';

export const Main = () => {
  const posts = trpc.useQuery(['post.all']);

  if (!posts.data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full p-2 mx-auto mt-10 xl:max-w-6xl md:max-w-3xl">
      <div className="flex flex-col w-full space-y-8">
        {posts.data.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            createdAt={post.createdAt}
            lastReplied={post.updatedAt}
          />
        ))}
      </div>
    </div>
  );
};
