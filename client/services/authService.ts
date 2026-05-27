import api from "@/lib/axios";
import { UseFormRegisterReturn } from "react-hook-form";

export const signupUser = async (
  data: UseFormRegisterReturn
) => {
  const response = await api.post(
    "/auth/signup",
    data
  );

  return response.data;
};

export const loginUser = async (
  data: UseFormRegisterReturn
) => {
  const response = await api.post(
    "/auth/login",
    data
  );

  return response.data;
};