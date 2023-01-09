import React from 'react';
import cn from 'classnames';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  className?: string;
  type?: string;
  href?: string;
}

export const Button = ({ text, className, type, href }: ButtonProps) => {
  return (
    <>
      {type ? (
        <Link
          href={href}
          className={cn(
            'bg-white px-5 py-2 rounded-3xl cursor-pointer border duration-300 block',
            className,
          )}
        >
          {text}
        </Link>
      ) : (
        <button
          className={cn(
            'bg-white px-5 py-2 rounded-3xl cursor-pointer border duration-300 block',
            className,
          )}
        >
          {text}
        </button>
      )}
    </>
  );
};
