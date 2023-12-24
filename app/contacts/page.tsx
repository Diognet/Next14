import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    absolute: 'Blog',
  },
};

export default function Contacts() {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>My Blog</h1>
    </>
  );
}
