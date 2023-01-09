import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'components/UI';

interface CardProps {
  product: Card;
}

export const Card = ({ product }: CardProps) => {
  return (
    <div className="card max-w-[282px] mx-auto border border-black rounded-xl overflow-hidden min-h-[520px] flex flex-col">
      <Link href={'products/' + product.slug}>
        <Image
          className="max-w-[280px] max-h-[280px]"
          src={product.media[0].url}
          width={280}
          height={280}
          alt={product.name}
        />
        <div className="card__body px-3 flex flex-col flex-1 pb-3">
          <h3 className="card__title text-lg font-medium pt-4 pb-1">{product.name}</h3>
          <span className="card__description block max-h-[100px] leading-5 text-ellipsis pb-2 overflow-hidden text-gray-500 text-sm">
            {JSON.parse(product?.description as string).blocks[0].data.text}
          </span>
        </div>
      </Link>

      <div className="card__footer items-end flex flex-1 justify-between px-3 pb-3">
        <span className="card__price pt-3 pb-2 text-gray-700">
          {product.pricing.priceRange.start.gross.amount}
          <span className="text-sm">₽</span>
        </span>
        <Button text={'Buy now'} className={'border-black hover:bg-gray-100'} />
      </div>
    </div>
  );
};
