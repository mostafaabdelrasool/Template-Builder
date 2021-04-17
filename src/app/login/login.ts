export class Login {
  userName: string;
  password: string;
  rememberMe: boolean;
  confirmPassword?: string;
  email: string;
}
export class LoginResponse {
  token: string;
  user: any
}
