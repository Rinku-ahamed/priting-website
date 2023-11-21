import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BaseURL } from "../config/helpers";

const useGetSettingsData = () => {
  const { data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: async () => {
      const res = await axios.get(`${BaseURL}/api/setting`);
      return res.data;
    },
  });
  return { settings };
};
export default useGetSettingsData;
