import { FC, useEffect, useState } from "react";
import { fetchProducts } from "../api-requests/api";
import { Product } from "../prop-types/types";
import ProductUI from "./product";

const Shopcart: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const renderProducts = () => {
    return (
      <ul className="grid lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 md:grid-cols-3 sm:grid-cols-2">
        {products.map((product) => (
          <ProductUI
            _id={product._id}
            id={product.id}
            title={product.title}
            price={product.price}
            discount={product.discount}
            description={product.description}
            productInStock={product.productInStock}
            productUrl={product.productUrl}
            createdAt={product.createdAt}
            updatedAt={product.updatedAt}
          />
        ))}
      </ul>
    );
  };

  return <div className="text-white flex flex-col">{renderProducts()}</div>;
};

export default Shopcart;
