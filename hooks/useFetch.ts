import { AxiosResponse } from "axios";
import { useState } from "react";

const useFetch = <D>() => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<D>();
  const [error, setError] = useState("");

  const fetchData = async <T extends D>(
    RequestFuntion: () => Promise<AxiosResponse<T>>
  ) => {
    try {
      setLoading(true);
      const response = await RequestFuntion();
      setError("");
      setData(response.data);
      return response.data
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
      throw new Error(error instanceof Error ? error.message : String(error));
    } finally {
      setLoading(false);
    }
  };

  return { fetchData, isLoading, data, error };
};

export default useFetch;
