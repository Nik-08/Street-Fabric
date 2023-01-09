import { Button, Footer, Head, Header } from 'components';
import { useProductByNameQuery } from 'generated/graphql';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function ProductPage() {
  const {
    query: { slug },
  } = useRouter();
  const { data, loading } = useProductByNameQuery({
    variables: { search: slug?.toString().split('-').join(' ') },
  });

  const product = data?.products?.edges[0]?.node;
  console.log(product);
  return (
    <>
      <div className="app min-h-screen">
        <Head />
        <Header />
        <div className="product__container container px-2 mx-auto">
          {product ? (
            <div className="product mt-8 flex flex-col lg:flex-row">
              <div className="product__image max-w-[500px] w-full mx-auto lg:mx-0">
                <Image src={product.media[0].url} alt={product.name} width={500} height={500} />
              </div>
              <div className="product__body flex flex-1 flex-col pt-8 lg-o lg:pt-0 lg:pl-8 min-h-full">
                <div className="flex flex-col flex-1">
                  <h2 className="product__name text-4xl font-bold mb-6">{product.name}</h2>
                  <p className="product__description text-lg mb-6">
                    {JSON.parse(product?.description as string).blocks[0].data.text}
                  </p>
                </div>

                <div className="product__footer items-end flex flex-1 justify-between px-3 pb-3">
                  <span className="product__price pt-3 pb-2 text-gray-700">
                    {product.pricing.priceRange.start.gross.amount}
                    <span className="text-sm">₽</span>
                  </span>
                  <Button text={'Buy now'} className={'border-black hover:bg-gray-100'} />
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <Footer className="bottom-0 relative left-0" />
      </div>
    </>
  );
}
