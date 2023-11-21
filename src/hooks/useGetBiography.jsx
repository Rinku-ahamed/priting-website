import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BaseURL } from "../config/helpers";

const useGetBiography = () => {
  const { data: biography } = useQuery({
    queryKey: ["biography"],
    queryFn: async () => {
      const res = await axios.get(`${BaseURL}/api/biography`);
      return res.data;
    },
  });
  return { biography };
};
export default useGetBiography;
