import React from 'react';
import { useCategoriesByLevelQuery } from 'generated/graphql';
import Link from 'next/link';
import Image from 'next/image';

export const Brands = () => {
  const { data, loading, error } = useCategoriesByLevelQuery();
  const brands = data?.categories.edges;
  return (
    <>
      <h2 className="title text-4xl font-black py-6 ">Brands</h2>
      <div className="brands__wrapper grid grid-cols-1 md:grid-cols-3 gap-20 items-center my-5">
        {!loading && !error
          ? brands.map((brand) => (
              <Link
                href={'/' + `${brand.node.name.toLocaleLowerCase()}`}
                key={brand.node.id}
                className="max-w-max mx-auto"
              >
                <div className="brands__item">
                  <Image
                    className="brands__image"
                    width={150}
                    height={150}
                    src={brand.node.backgroundImage.url}
                    alt={brand.node.name}
                  />
                </div>
              </Link>
            ))
          : null}
      </div>
    </>
  );
};
