'use client';

import React, { useEffect, useState } from 'react';

import HamburgerIcon from '@/assets/icons/hamburger-icon';
import NavigationLink from './navigation-link';
import Logo from './logo';
import { ROUTES } from '@/utils/constants/constants';
import clsx from 'clsx';

const Header = () => {
  const headerRef = React.useRef<HTMLHeadElement>(null);

  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollPosition > window.scrollY) {
        headerRef.current!.style.top = '0';
      } else {
        headerRef.current!.style.top = '-72px';
        setIsMenuOpen(false);
      }
      setScrollPosition(window.scrollY);
    });
  }, [scrollPosition]);

  return (
    <header
      ref={headerRef}
      className={clsx(
        'sticky left-0 top-0 z-30 flex w-full items-center justify-between bg-gradient-to-b from-black/75 to-transparent px-5 py-4 transition-all duration-300 xl:max-w-7xl',
        isMenuOpen && 'bg-black',
      )}
    >
      <Logo />
      <button type="button" className="xl:hidden" onClick={handleToggleMenu}>
        <HamburgerIcon />
      </button>
      <div
        className={clsx(
          'absolute left-0 top-0 -z-10 h-dvh w-screen bg-black/65 transition-all duration-300',
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      />
      <div
        className={clsx(
          'absolute right-0 top-full z-50 flex w-full flex-col gap-4 bg-black px-6 py-4 transition-all duration-300',
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <NavigationLink
          href={ROUTES.workSection}
          label="Work"
          onClick={handleLinkClick}
        />
        <NavigationLink
          href={ROUTES.aboutSection}
          label="About me"
          onClick={handleLinkClick}
        />
        <NavigationLink
          href="/files/resume.pdf"
          label="resume"
          onClick={handleLinkClick}
          target="_blank"
        />
      </div>
      <nav className="hidden xl:flex xl:gap-6">
        <NavigationLink href={ROUTES.workSection} label="Work" />
        <NavigationLink href={ROUTES.aboutSection} label="About me" />
        <NavigationLink
          href="/files/resume.pdf"
          label="resume"
          onClick={handleLinkClick}
          target="_blank"
        />
      </nav>
    </header>
  );
};

export default Header;
