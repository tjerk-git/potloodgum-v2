"use client"

import Avatar from './avatar'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full border-b-8 border-black p-5">
      <nav>
        <ul className="text-xl flex flex-col items-baseline justify-end gap-5 lg:text-3xl lg:flex-row">
          <li><Avatar imageUrl="/Potloodgum.webp" /></li>
          <li className="text-4xl flex-1 font-semibold uppercase lg:text-8xl"> <Link href="/">Potloodgum</Link></li>
          <li><Link className="hover:underline text-indigo-600" href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}