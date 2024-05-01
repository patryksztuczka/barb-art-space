import Image from 'next/image';
import React from 'react';

import logo from '@/assets/images/logo.png';
import Link from 'next/link';
import { ROUTES } from '@/utils/constants/constants';

const Logo = () => {
  return (
    <Link href={ROUTES.home} className="relative h-6 w-14">
      <Image src={logo} alt="" fill />
    </Link>
  );
};

export default Logo;
