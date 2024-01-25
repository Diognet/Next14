import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Welcome home!</h1>

      <Link href="/products"> Products </Link>
      <Link href="/about"> About </Link>
      <Link href="/blog"> Blog </Link>
    </>
  );
}
