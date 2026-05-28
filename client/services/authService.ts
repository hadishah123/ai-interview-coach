import api from "@/lib/axios";

import {
  SignupFormData,
  LoginFormData,
} from "@/types/auth";

export const signupUser = async (
  data: SignupFormData
) => {
  const response = await api.post(
    "/auth/signup",
    data
  );

  return response.data;
};

export const loginUser = async (
  data: LoginFormData
) => {
  const response = await api.post(
    "/auth/login",
    data
  );

  return response.data;
};