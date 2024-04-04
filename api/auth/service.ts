import { AxiosResponse } from "axios";
import { UserType } from "../../types/UserTypes";
import { instance } from "../instance";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class AuthService {
  static async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<UserType>> {
    const response = await instance.post("/auth/login", {
      username,
      password,
    });
    const accessToken = response.data.token;
    await AsyncStorage.setItem("accessToken", accessToken);
    return response;
  }
  static getUser(): Promise<AxiosResponse<UserType>> {
    return instance.get("/auth/me");
  }

  static refreshToken(): Promise<AxiosResponse<UserType>> {
    return instance.post("/auth/refresh");
  }

  static async logout() {
    await AsyncStorage.removeItem("accessToken");
  }
}
