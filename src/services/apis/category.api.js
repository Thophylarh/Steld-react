import axios from "../../lib/axios";

/**
 * Description:Fetch all product categories
 * @returns {any}
 */
export const GetAllCategoriesApi = async () => {
  try {
    const url = "/products/categories";
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Description: Get products in a specific category
 * @param {string} category
 * @returns {any}
 */
export const GetProductsInASpecificCategoryApi = async (category) => {
  try {
    const url = `products/category/${category}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};
