import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { router } from "expo-router";
import "core-js/stable/atob";
import { jwtDecode } from "jwt-decode";

export const instance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(
  async function (config: InternalAxiosRequestConfig) {
    // Get the access token from AsyncStorage

    const accessToken = await AsyncStorage.getItem("accessToken");
    // If there's an access token, attach it to the Authorization header
    if (accessToken) {
      const expirationDate = new Date(jwtDecode(accessToken).exp!);

      if (config.url?.includes("auth")) {
        config.headers.Authorization = `Bearer ${accessToken}`;
        // ! Check and refresh token before expiring 10 seconds before expires
        if (
          Math.floor(expirationDate.getTime()) -
            Math.floor(new Date().getTime() / 1000) <
          10
        ) {
          const response = await axios({
            method: "post",
            url: "https://dummyjson.com/auth/refresh",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          });
          console.log(response.data.token);
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
        const a = await response.json();
        if (a?.expiredAt) {
          await AsyncStorage.removeItem("accessToken");
          router.push("/");
          return;
        }

        console.log(a);

        // Extract the new access token from the response
        // const newAccessToken = response.data.token;

        // // Store the new access token in local storage
        // await AsyncStorage.setItem("accessToken", newAccessToken as string);

        // // Update the Authorization header with the new access token
        // originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        // Retry the original request
        return axios(originalRequest);
      } catch (error) {
        // Handle token refresh error (e.g., logout user)
        console.error("Failed to refresh token:", error);
        throw error;
      }
    }

    return Promise.reject(error);
  }
);
