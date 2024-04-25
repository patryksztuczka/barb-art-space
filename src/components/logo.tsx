import Image from 'next/image';
import React from 'react';

import logo from '@/assets/images/logo.png';

const Logo = () => {
  return (
    <div className="relative h-6 w-14">
      <Image src={logo} alt="" fill />
    </div>
  );
};

export default Logo;
