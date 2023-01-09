interface Card {
  attributes: any;
  id: string;
  name: string;
  slug: string;
  rating?: number;
  description?: any;
  media?: {
    url: string;
  }[];

  pricing?: {
    discount?: any;
    onSale?: boolean;
    priceRange?: {
      start?: {
        gross: {
          amount: number;
          currency: string;
        };
        net: {
          amount: number;
          currency: string;
        };
        tax: {
          amount: number;
          currency: string;
        };
      };
    };
  };
  rating: number;
  variants?: {
    id: string;
    name: string;
  }[];
  thumbnail?: {
    url: string;
  };
}
