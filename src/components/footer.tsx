import React from 'react';
import Logo from './logo';
import InstagramIcon from '@/assets/icons/instagram-icon';
import LinkedinIcon from '@/assets/icons/linkedin-icon';

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-between border-t px-5 py-6 xl:px-[42px]">
      <Logo />
      <div className="flex gap-4">
        <InstagramIcon />
        <LinkedinIcon />
      </div>
    </footer>
  );
};

export default Footer;
