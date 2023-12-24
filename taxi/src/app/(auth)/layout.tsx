'use client';
import "./styles.css"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Register ', href: '/register' },
  { name: 'Login ', href: '/login' },
  { name: 'Fogot Password ', href: '/fogot-password' },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
