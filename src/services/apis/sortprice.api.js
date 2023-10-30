import axios from "../../lib/axios";

export const SortAllCollectionsApi = async () => {
  try {
    const url = "/products?sort=desc";
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};
