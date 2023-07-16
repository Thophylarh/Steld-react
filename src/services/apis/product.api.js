import axios from "../../lib/axios"

/**
 * Description: Fetch all products
 * @returns {any}
 */
export const GetAllProductsApi = async () => {
  try {
    const url = "/products";
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};
