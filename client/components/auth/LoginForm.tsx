"use client";

import toast from "react-hot-toast";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthInput from "./AuthInput";

import {
  loginSchema,
  LoginFormData,
} from "@/types/auth";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (
    data: LoginFormData
  ) => {
    console.log(data);

    toast.success("Login successful");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <AuthInput
        label="Email"
        type="email"
        placeholder="john@example.com"
        register={register("email")}
        error={errors.email?.message}
      />

      <AuthInput
        label="Password"
        type="password"
        placeholder="******"
        register={register("password")}
        error={errors.password?.message}
      />

      <button
        type="submit"
        className="w-full rounded-xl bg-white py-3 font-semibold text-black transition hover:opacity-90"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;