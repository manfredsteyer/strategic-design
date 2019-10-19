export interface ProductCategory {
  readonly id: number;
  readonly name: string;
}

// Product Aggregat 
export interface Product {
  readonly id: number;
  readonly productCategoryId: number;
  readonly name: string;

  readonly pictures: ProductPicture[];
  readonly prices: ProductPrice[];
}

export interface ProductPicture {
  readonly id: number;
  readonly url: string;
  readonly text: string;
}

export interface ProductPrice {
  readonly id: number;
  readonly count: string;
  readonly price: string;
}
// END

export interface ProductQuestion {
  readonly id: number;
  readonly productId: number;
  readonly question: string;
  readonly answer: string;
}