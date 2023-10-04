import { Metadata } from 'next';
import Link from 'next/link';

async function getBlogData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error('Unable to fetch posts!');

  return response.json();
}

export const metadata: Metadata = {
  title: 'Blog | Next App',
};

export default async function BlogPage() {
  const posts = await getBlogData();

  return (
    <div>
      <h1 className="h1-bold">Blog Page</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
