"use server"

import { FeaturedPosts } from './../sections';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from './../services';

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-10 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post: any, index: number) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget categories={undefined} slug={undefined} />
            <Categories />
            <div className='overflow-hidden'>
              <div className="bg-gradient-to-b from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute bottom-[1050px] right-[1500px] transform translate-x-1/2 translate-y-1/2"></div>
              <div className="bg-gradient-to-b from-blue-900 to-transparent rounded-full h-40 w-80 z-0 blur-lg absolute bottom-0 right-[300px] transform translate-x-1/2 translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}