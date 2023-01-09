import React from 'react';

import { BsSearch } from '@react-icons/all-files/bs/BsSearch';

export const Input = () => {
  return (
    <div className="relative w-8 lg:w-full max-w-xs">
      <input
        className="border rounded p-2 max-w-xs w-full outline-none bg-transparent hidden lg:block"
        type="text"
      />
      <BsSearch className="absolute left-2 top-2/4 -translate-y-1/2 cursor-pointer z-10 lg:-z-10 text-xl lg:text-base" />
    </div>
  );
};
