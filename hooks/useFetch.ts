import { AxiosResponse } from "axios";
import { useState } from "react";

const useFetch = <D>() => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<D | null>(null);

  const fetchData = async <T extends D>(
    RequestFuntion: () => Promise<AxiosResponse<T>>
  ) => {
    try {
      setLoading(true);
      const response = await RequestFuntion();
      console.log(response.config.url)
      setData(response.data);
    } catch (error) {
      console.error(error);
      throw new Error(error instanceof Error ? error.message : String(error));
    } finally {
      setLoading(false);
    }
  };

  return { fetchData, isLoading, data };
};

export default useFetch;
