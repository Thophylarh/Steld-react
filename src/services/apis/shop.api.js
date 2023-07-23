import axios from "../../lib/axios";

export const GetShopProductsApi = async ()=>{
    try {
        const url = "/products";
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        throw error
    }
}