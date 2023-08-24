import { FC, useEffect, useState } from "react";
import { Product } from "../prop-types/types";
import { fetchProduct } from "../api-requests/api";
import { useParams } from "react-router-dom";
import { ProgressBar } from "primereact/progressbar";
import { Divider } from "primereact/divider";

const ProductInfo: FC = () => {
  const [product, setProduct] = useState<Product | undefined>();
  const [value, setValue] = useState<number>(0);
  const params = useParams();
  const productId: string | undefined = params.productID;

  const maximumStock: number = product?.productInStock ?? 0;

  useEffect(() => {
    if (productId) {
      loadProduct(productId);
    }
  }, []);

  const loadProduct = async (productId: string) => {
    try {
      const data: Product = await fetchProduct(productId);
      setProduct(data);
    } catch (error) {
      throw new Error();
    }
  };

  const renderProducts = () => {
    return (
      <ul className="grid lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {product?.productUrl.map((image, index) => {
          return (
            <li key={index}>
              <img
                src={`${image}`}
                alt={`${product.title}`}
                className="w-full h-full rounded-lg"
              />
            </li>
          );
        })}
      </ul>
    );
  };

  const handleMinusOnPress = () => {
    setValue(value < 1 ? 0 : value - 1);
    console.log(value);
  };

  const handlePlusOnPress = () => {
    setValue(value < maximumStock ? value + 1 : maximumStock);
    console.log(value);
    console.log(typeof product?.productInStock);
  };

  return (
    <div className="flex h-screen flex-col p-5">
      {product ? (
        <>
          <div className="h-2/4 w-full flex-row flex">
            <div className="    flex w-1/2 h-full  justify-center items-center  border border-none">
              <img
                src={`${product.productUrl[0]}`}
                className="flex h-full w-full rounded-lg"
              />
            </div>
            <div className="flex w-1/2 bg-green-400 rounded-lg flex-col justify-center items-center overflow-auto ">
              <div className="card flex-col items-center justify-center flex mt-10 p-10">
                <h1 className="text-2xl">{product.title}</h1>
                <p className="text-stone-700 italic">{product.description}</p>
                <div className="bg-slate-100  rounded-lg p-5 mt-5 w-full flex flex-row ">
                  <div className="w-1/2 ">
                    <div className="flex-col flex flex-wrap text-stone-700 gap-3">
                      <div className="gap-3 flex flex-row">
                        <p>Price:</p>
                        {product.price} Tshs
                      </div>
                      <div className="gap-3 flex flex-row">
                        <p>Discount:</p>
                        {product.discount} Tshs
                      </div>
                      <div className="gap-3 flex flex-row">
                        <p>Available:</p>
                        {product.productInStock} items
                      </div>
                      <div className="gap-3 flex flex-row">
                        <p>Available:</p>
                        {product.productInStock} items
                      </div>
                    </div>
                  </div>
                  <Divider layout="vertical" />
                  <div className="w-1/2 ">
                    <div className="flex flex-col w-full h-full items-center justify-center ">
                      <div className="flex-row flex border border-red-800">
                        <p
                          className="flex items-center justify-center bg-stone-700 text-white w-1/6 cursor-pointer"
                          onClick={handleMinusOnPress}
                        >
                          -
                        </p>
                        <input
                          type="number"
                          min={0}
                          max={maximumStock}
                          value={value}
                          className="w-4/6"
                          onChange={(e) => {
                            setValue(Number(e.target.value));
                            console.log(value);
                          }}
                        />
                        <p
                          className="flex items-center justify-center bg-stone-700 text-white w-1/6 cursor-pointer"
                          onClick={handlePlusOnPress}
                        >
                          +
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-auto w-full flex-col flex">
            <div>
              <Divider align="left" className="hidden md:flex">
                <p>You may also like</p>
              </Divider>
              <div className=" flex items-center justify-center  p-5">
                {renderProducts()}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="card">
          <ProgressBar
            mode="indeterminate"
            style={{ height: "6px" }}
          ></ProgressBar>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
