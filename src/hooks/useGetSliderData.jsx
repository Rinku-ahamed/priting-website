import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BaseURL } from "../config/helpers";

const useGetSliderData = () => {
  const { data: sliders, isLoading } = useQuery({
    queryKey: ["sliders"],
    queryFn: async () => {
      const res = await axios.get(`${BaseURL}/api/slider`);
      return res.data;
    },
  });
  return { sliders, isLoading };
};
export default useGetSliderData;
