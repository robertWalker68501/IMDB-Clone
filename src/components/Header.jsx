import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Header() {
  return (
    <div className='mx-auto flex max-w-6xl items-center justify-between p-3'>
      <ul className='flex gap-4'>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <li>
            <Link href='/sign-in'>Sign in</Link>
          </li>
        </SignedOut>
        <li className='hidden sm:block'>
          <Link href={'/'}>Home</Link>
        </li>
        <li className='hidden sm:block'>
          <Link href='/about'>About</Link>
        </li>
      </ul>
      <div className='flex items-center gap-4'>
        <ThemeToggle />
        <Link
          href={'/'}
          className='flex items-center gap-1'
        >
          <span className='rounded-lg bg-amber-500 px-2 py-1 text-2xl font-bold'>
            IMDb
          </span>
          <span className='hidden text-xl sm:inline'>Clone</span>
        </Link>
      </div>
    </div>
  );
}
