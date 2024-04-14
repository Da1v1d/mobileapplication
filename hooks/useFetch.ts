import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { Alert } from "react-native";

// ! TODO NEED TO REFACTOR
const useFetch = <D>() => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<D>();
  const [error, setError] = useState("");

  const fetchData = async (RequestFuntion: () => Promise<AxiosResponse<D>>) => {
    try {
      setLoading(true);
      const response = await RequestFuntion();
      setError("");
      setData(response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
        Alert.alert(error.response?.data.message);
      }
      // throw new Error(error instanceof Error ? error.message : String(error));
    } finally {
      setLoading(false);
    }
  };

  return { fetchData, isLoading, data, error };
};

export default useFetch;
