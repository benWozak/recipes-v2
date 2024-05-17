import * as React from 'react';
import { ThemeToggle } from '../theme/theme-toggle';
import Link from 'next/link';

import LoginButton from './login-button';



export interface IHeaderProps {
}

export default function Header (props: IHeaderProps) {


  return (
    <header className="sticky top-0 bg-inherit shadow-md px-3 py-2 z-10">
      <nav className=" flex justify-between">
        <div className="w-[130px] md:w-[200px] flex items-center">
          <Link href="/">Logo Placeholder</Link>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <LoginButton />
        </div>
      </nav>
    </header>
  );
}
