export interface Product {
  _id: string;
  id: string;
  title: string;
  price: number;
  discount: number;
  description: string;
  productInStock: number;
  productUrl: {
    [key: string]: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
