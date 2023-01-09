import React from 'react';
import { useCollectionBySlugQuery } from 'generated/graphql';
import { Card } from 'components/Card';

export const TopProducts = () => {
  const { data, loading, error } = useCollectionBySlugQuery({
    variables: { slug: 'tovar-nedeli' as string },
  });
  const products = data?.collection.products.edges;

  return (
    <>
      <h2 className="title text-4xl font-black py-6">Top Products</h2>

      <div className="cards px-2 md:px-6 grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6">
        {!loading && !error
          ? products.map((product) => <Card product={product.node} key={product.node.id} />)
          : null}
      </div>
    </>
  );
};
