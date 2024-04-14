import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { router } from "expo-router";
import "core-js/stable/atob";
import { jwtDecode } from "jwt-decode";

export const instance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: { "Content-Type": "application/json" },
});

// TODO need to refactor interceptors.

instance.interceptors.request.use(
  async function (config: InternalAxiosRequestConfig) {
    // Get the access token from AsyncStorage

    const accessToken = await AsyncStorage.getItem("accessToken");
    // If there's an access token, attach it to the Authorization header
    if (accessToken) {
      const expirationDate = new Date(jwtDecode(accessToken).exp!);
      const expirationTimeStamp = Math.floor(expirationDate.getTime());
      const currentTimeStamp = Math.floor(new Date().getTime() / 1000);
      if (config.url?.includes("auth")) {
        config.headers.Authorization = `Bearer ${accessToken}`;

        if (expirationTimeStamp - currentTimeStamp < 10) {
          // Check and refresh token before expiring 10 seconds before expires
          const response = await axios({
            method: "post",
            url: "https://dummyjson.com/auth/refresh",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          });
          await AsyncStorage.setItem("accessToken", response.data.token!);
          config.headers.Authorization = `Bearer ${response.data.token}`;
        }
      }
    }

    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    // If the error status is 401 (Unauthorized) and there's no original request retry
    if (
      originalRequest.url.includes("auth") &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const accessToken = await AsyncStorage.getItem("accessToken");
        // Refresh the access token
        // ?! For some reasan I got an error while posting with axios
        const response = await fetch("https://dummyjson.com/auth/refresh", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        if (data?.expiredAt) {
          await AsyncStorage.removeItem("accessToken");
          router.push("/");
          return;
        }

        return axios(originalRequest);
      } catch (error) {
        console.error("Failed to refresh token:", error);
        throw error;
      }
    }

    return Promise.reject(error);
  }
);
