import React, { useState } from 'react';

import { AiOutlineShoppingCart } from '@react-icons/all-files/ai/AiOutlineShoppingCart';
import classNames from 'classnames';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { RxCross1 } from 'react-icons/rx';

import { Input, Logo, Navigation } from 'components';

export const Header = () => {
  // @ts-ignore
  const [countProduct, setCountProduct] = useState<number>(0);
  const [visibilityNavigation, setVisibilityNavigation] = useState<boolean>(false);

  const openModal = () => {
    setVisibilityNavigation((prev) => !prev);
    document.body.classList.add('overflow-y-hidden');
  };

  const closeModal = () => {
    setVisibilityNavigation((prev) => !prev);
    document.body.classList.remove('overflow-y-hidden');
  };

  return (
    <header className="header shadow-lg lg:py-2 min-h-[55px] md:min-h-fit">
      <div className="flex container px-2 mx-auto">
        <Logo />
        <div className="hidden items-center lg:flex">
          <Navigation />
        </div>
        <div className="flex items-center w-full justify-end">
          <Input />
        </div>

        <div className="flex items-center ml-6 relative">
          <AiOutlineShoppingCart size={25} className="cursor-pointer" />
          {countProduct > 0 ? (
            <span className="absolute -right-2 top-[15px] text-[10px] bg-primary-focus w-5 h-5 flex items-center justify-center rounded-full text-neutral">
              {countProduct <= 99 ? countProduct : '99+'}
            </span>
          ) : null}
        </div>
        <div className="flex items-center ml-6 relative">
          <div>
            {visibilityNavigation ? (
              <RxCross1
                className="block lg:hidden absolute z-30 top-2/4 -translate-y-1/2 right-0 cursor-pointer"
                size={25}
                onClick={() => closeModal()}
              />
            ) : (
              <HiBars3BottomRight
                className="block lg:hidden cursor-pointer"
                size={25}
                onClick={() => openModal()}
              />
            )}
          </div>
        </div>
        {visibilityNavigation ? (
          <div className="flex lg:hidden justify-end mobile__nav absolute left-0 top-0 h-full w-full z-20 bg-[#00000080]">
            <div
              className={classNames(
                'flex items-center justify-center h-full w-3/4 bg-white overflow-y-auto relative left-3/4',
                {
                  '-left-0': visibilityNavigation,
                },
              )}
            >
              <Navigation className="flex-col text-xl" />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};
