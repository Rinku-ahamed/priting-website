import axios from "axios";
import { BaseURL } from "../config/helpers";
const getPaintingData = async () => {
  const res = await axios.get(`${BaseURL}/api/product`);
  return res.data;
};

export default getPaintingData;
