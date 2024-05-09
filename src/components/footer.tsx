import React from 'react';

import InstagramIcon from '@/assets/icons/instagram-icon';
import LinkedinIcon from '@/assets/icons/linkedin-icon';

import Logo from './logo';

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center">
      <div className="flex w-full max-w-7xl items-center justify-between border-t px-4 py-6">
        <Logo />
        <div className="flex gap-4">
          <InstagramIcon />
          <LinkedinIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
