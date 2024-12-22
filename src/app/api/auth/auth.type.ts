import { ResponseAPIType } from "../common.type";

export type UserType = {
  _id?: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  gender: number;
  address: string;
  phone: string;
  type: number;
  refresh_token?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type SignInRequestType = {
  email: string;
  password: string;
};

export type SignInResponseAPIType = ResponseAPIType<{
  data: {
    accessToken: string;
    refreshToken: string;
    user: UserType;
  };
  message: string;
}>;
