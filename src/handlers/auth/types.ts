export interface SignupBody {
  email: string;
  password: string;
  username: string;
}

export interface SignupResponse {
  message: string;
}

export interface SigninBody {
  email: string;
  password: string;
}

export interface SigninResponse {
  message: string;
  token: string;
}
