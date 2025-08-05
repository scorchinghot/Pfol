import React from 'react';
import { notFound } from 'next/navigation';

import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm } from '../../../components';
import { getPosts, getPostDetails } from '../../../services';
import { AdjacentPosts } from '../../../sections';

type Params = { slug: string };

// This is the key change: params is a Promise<Params> exactly
interface PageProps {
  params: Promise<Params>;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(({ node: { slug } }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const post = await getPostDetails(resolvedParams.slug);
  if (!post) return { title: 'Post not found' };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostDetailsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = await getPostDetails(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
