import * as React from 'react';
import { ThemeToggle } from '../theme/theme-toggle';

import LoginButton from './login-button';



export interface IHeaderProps {
}

export default function Header (props: IHeaderProps) {


  return (
    <header className="relative shadow-md px-3 py-2">
      <nav className="flex justify-between">
        <div className="w-[130px] md:w-[200px] flex items-center">
          Logo Placeholder
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <LoginButton />
        </div>
      </nav>
    </header>
  );
}
