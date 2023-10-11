import { authControllerSignUp } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export function useSignUpForm() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess() {
      router.push(ROUTES.HOME);
    },
  });

  const errorMessage = signUpMutation.error ? "Sign up faled" : undefined;

  return {
    register,
    errorMessage,
    handleSubmit: handleSubmit((data) => signUpMutation.mutate(data)),
    isLoading: signUpMutation.isLoading,
  };
}
