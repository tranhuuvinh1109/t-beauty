import axiosInstance from "..";
import {
  GetMyProfileResponseAPIType,
  SignInRequestType,
  SignInResponseAPIType,
} from "./auth.type";

export const signIn = async (data: SignInRequestType) => {
  try {
    const response: SignInResponseAPIType = await axiosInstance.post(
      "/auth/sign-in",
      data
    );
    return response.data.data;
  } catch (err) {
    console.error("Error during sign-in:", err);
    throw new Error("Failed to sign in. Please try again later.");
  }
};

export const getMyProfile = async () => {
  try {
    const response: GetMyProfileResponseAPIType = await axiosInstance.post(
      "/auth/my-profile"
    );
    return response.data.data;
  } catch (err) {
    console.error("Error during getMyProfile:", err);
    throw new Error("Failed to get my profile. Please try again later.");
  }
};
