'use client';
import './styles.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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
  const [input, setIntput] = useState('');

  return (
    <div>
      <div>
        <input
          value={input}
          onChange={(e) => setIntput(e.target.value)}
        ></input>
      </div>

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
