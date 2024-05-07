import Link from 'next/link';
import React from 'react';

interface INavigationLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

const NavigationLink = ({ href, label, onClick }: INavigationLinkProps) => {
  return (
    <Link
      href={href}
      className="from-[#FF004D] to-[#FF9000] py-4 font-anton text-xl uppercase hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent xl:py-0 xl:text-base"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default NavigationLink;
