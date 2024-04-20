import React from 'react';

interface INavigationLinkProps {
  href: string;
  label: string;
}

const NavigationLink = ({ href, label }: INavigationLinkProps) => {
  return (
    <div className="from-[#FF004D] to-[#FF9000] font-anton uppercase hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent">
      {label}
    </div>
  );
};

export default NavigationLink;
