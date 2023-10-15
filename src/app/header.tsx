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
          <li><Link className="flex cursor-pointer items-center rounded-md border-2 border-black bg-[#bc95d4] px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none" href="mailto:tjerk.dijkstra@icloud.com">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}