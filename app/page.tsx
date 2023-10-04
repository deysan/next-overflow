import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="h1-bold flex-center mb-4">Home</h1>
      <Link href="/blog" className="btn p-2">
        Go to Blog
      </Link>
    </div>
  );
}
