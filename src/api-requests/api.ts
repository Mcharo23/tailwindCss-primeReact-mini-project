import axios from "axios";

const API_BASE_URL = "http://192.168.150.152:3000";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/products/retrieve-products`
    );

    return response.data;
  } catch (error) {
    throw new Error("Error fetching products");
  }
};

export const fetchProduct = async (productId: string) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/products/${productId}/product`
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching product`);
  }
};
