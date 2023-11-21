import { useQuery } from "@tanstack/react-query";
import { BaseURL } from "../config/helpers";
import axios from "axios";

const useGetAllPainting = () => {
  const { data, isLoading: paintingLoading } = useQuery({
    queryKey: ["paintings"],
    queryFn: async () => {
      const res = await axios.get(`${BaseURL}/api/product`);
      return res.data;
    },
  });
  const paintings = data?.data;
  return { paintings, paintingLoading };
};

export default useGetAllPainting;
