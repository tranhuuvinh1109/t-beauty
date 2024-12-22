import { useMutation } from "@tanstack/react-query";
import { signIn } from "./auth.api";

export const useSignIn = () => {
  return useMutation({
    mutationKey: ["signIn"],
    mutationFn: signIn,
  });
};
