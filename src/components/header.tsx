'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import HamburgerIcon from '@/assets/icons/hamburger-icon';
import NavigationLink from './navigation-link';
import Logo from './logo';

const Header = () => {
  const headerRef = React.useRef<HTMLHeadElement>(null);

  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollPosition > window.scrollY) {
        headerRef.current!.style.top = '0';
      } else {
        headerRef.current!.style.top = '-72px';
      }
      setScrollPosition(window.scrollY);
    });
  }, [scrollPosition]);

  return (
    <header
      ref={headerRef}
      className="sticky left-0 top-0 z-50 flex w-full items-center justify-between px-5 py-4 transition-all duration-300 xl:max-w-7xl"
    >
      <Logo />
      <button type="button" className="xl:hidden">
        <HamburgerIcon />
      </button>
      <nav className="hidden xl:flex xl:gap-6">
        <NavigationLink href="/work" label="Work" />
        <NavigationLink href="/about" label="About me" />
        <NavigationLink href="/resume" label="resume" />
      </nav>
    </header>
  );
};

export default Header;
