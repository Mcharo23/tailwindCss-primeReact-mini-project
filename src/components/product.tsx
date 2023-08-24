import { FC } from "react";
import { Product } from "../prop-types/types";
import "primeicons/primeicons.css";
import CustomButton from "./custom-button";
import { useNavigate } from "react-router-dom";

const ProductUI: FC<Product> = ({ id, title, price, productUrl }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/home/product-info/${id}`);
  };

  return (
    <div
      className="card flex flex-col justify-content-center w-full h-full  p-1 rounded-2xl"
      key={id}
    >
      <img
        src={`${productUrl[0]}`}
        alt="Image"
        className="flex h-4/6 w-full rounded-2xl"
        onClick={handleOnClick}
      />
      <div className="h-2/6  text-stone-800 justify-center items-center flex flex-col">
        <div className="flex-row flex">
          <div className="w-1/2 ">{title}</div>
          <div className="text-end w-1/2">Tshs {price}</div>
        </div>
        <CustomButton
          label={"Add to Cart"}
          progress={false}
          icon={"pi pi-cart-plus"}
          borderRadius={"30px"}
          backgroundColor={"black"}
          border={"none"}
          onClick={handleOnClick}
        />
      </div>
    </div>
  );
};

export default ProductUI;
