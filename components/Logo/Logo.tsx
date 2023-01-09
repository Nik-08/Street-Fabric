import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import LogoHeader from '@assets/Logo.png';
import LogoFooter from '@assets/LogoFooter.png';

interface LogoProps {
  footer?: boolean;
}

export const Logo = ({ footer }: LogoProps) => {
  return (
    <div className="w-full max-w-[70px]">
      <Link href="/">
        {footer ? (
          <Image src={LogoFooter} width="70" height="70" alt="Logo" />
        ) : (
          <Image src={LogoHeader} width="70" height="70" alt="Logo" />
        )}
      </Link>
    </div>
  );
};
