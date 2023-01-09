import React from 'react';
import { Logo } from 'components/Logo';
import { Navigation } from 'components/Navigation';

import { AiOutlineInstagram } from 'react-icons/ai';
import { SlSocialVkontakte } from 'react-icons/sl';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import classNames from 'classnames';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <div
      className={classNames(
        className,
        'footer bg-black text-white flex min-h-[100px] items-center py-2 md:px-0 mt-8 w-full',
      )}
    >
      <div className="flex container px-2 mx-auto justify-between flex-col md:flex-row items-center">
        <Logo footer />
        <Navigation className="flex-col md:flex-row pl-0 pt-2 pb-4 md:pl-4 md:pt-0 md:pb-0" />
        <div className="footer__shares flex items-center">
          <HiOutlineEnvelope size={25} className="cursor-pointer" />
          <SlSocialVkontakte size={25} className="cursor-pointer ml-2" />
          <AiOutlineInstagram size={25} className="cursor-pointer ml-2" />
        </div>
      </div>
    </div>
  );
};
