import { AuthService } from "./service";

export class AuthApi {
  static login(username: string, password: string) {
    return AuthService.login(username, password);
  }

  static getUser() {
    return AuthService.getUser();
  }
  
  static logout() {
    return AuthService.logout();
  }
}
