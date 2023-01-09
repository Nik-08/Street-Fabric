import { Brands, Button, Footer, Head, Header, TopProducts } from 'components';

export default function Home() {
  return (
    <div className="app">
      <Head />
      <Header />
      <div className="banner bg-[url('../assets/banner.jpg')] relative min-h-screen bg-no-repeat bg-center md:bg-top-left 	bg-cover flex items-center justify-center flex-col">
        <h1 className="banner__title text-white text-4xl md:text-6xl font-black text-center uppercase mb-4 z-10">
          Feel Your All
        </h1>
        <p className="text-white z-10 text-center mb-4 px-2">
          This is a celebration of everything that moves you. For the power of choosing and the
          freedom of being. <br /> Here’s to the big, beautiful mess of movement and mindfulness
          that simply makes you feel good.
        </p>
        <Button
          text="Shop"
          type="link"
          href="/"
          className="z-10 hover:bg-transparent hover:border-white hover:text-white"
        />
        <div className="banner-filter absolute w-full h-full bg-black opacity-50 left-0 top-0" />
      </div>
      <div className="container px-2 mx-auto">
        <Brands />
        <TopProducts />
      </div>
      <Footer />
    </div>
  );
}
