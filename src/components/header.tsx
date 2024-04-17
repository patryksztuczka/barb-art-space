import Image from 'next/image';
import React from 'react';

import logo from '@/assets/images/logo.png';
import HamburgerIcon from '@/assets/icons/hamburger-icon';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 py-4">
      <div className="relative h-6 w-14">
        <Image src={logo} alt="" fill />
      </div>
      <HamburgerIcon />
    </header>
  );
};

export default Header;
