import Link from 'next/link';
import React from 'react';

interface INavigationLinkProps {
  href: string;
  label: string;
  download?: boolean;
  target?: string;
  onClick?: () => void;
}

const NavigationLink = ({
  href,
  label,
  download,
  target,
  onClick,
}: INavigationLinkProps) => {
  return (
    <Link
      href={href}
      className="from-[#FF004D] to-[#FF9000] py-4 font-anton text-xl uppercase hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent xl:py-0 xl:text-base"
      onClick={onClick}
      target={target}
      download={download}
    >
      {label}
    </Link>
  );
};

NavigationLink.defaultProps = {
  download: false,
  target: '_self',
  onClick: () => {},
};

export default NavigationLink;
