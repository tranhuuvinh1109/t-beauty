import { useMutation } from "@tanstack/react-query";
import { getMyProfile, signIn } from "./auth.api";
import { MUTATION_KEY } from "@/app/enum/mutation";

export const useSignIn = () => {
  return useMutation({
    mutationKey: [MUTATION_KEY.SIGN_IN],
    mutationFn: signIn,
  });
};

export const useGetMyProfile = () => {
  return useMutation({
    mutationKey: [MUTATION_KEY.GET_MY_PROFILE],
    mutationFn: getMyProfile,
    retry: 3,
    retryDelay: 1000,
  });
};
