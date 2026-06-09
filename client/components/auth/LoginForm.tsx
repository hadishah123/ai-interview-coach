"use client";
import { useAuth } from "@/store/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthInput from "./AuthInput";

import {
  loginSchema,
  LoginFormData,
} from "@/types/auth";

import { loginUser } from "@/services/authService";

const LoginForm = () => {
  const { login } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (
    data: LoginFormData
  ) => {
    try {
      const response =
        await loginUser(data);

      login(response.token);

      toast.success("Login successful");

      router.push("/dashboard");
    } catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    toast.error(
      error.response?.data?.message ||
      "Invalid credentials"
    );
  } else {
    toast.error("Something went wrong");
  }
}
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
        disabled={isSubmitting}
        className="
        w-full
        rounded-xl
        bg-indigo-600
        py-3
        font-semibold
        text-white
        transition
        hover:bg-indigo-700
        disabled:cursor-not-allowed
        disabled:opacity-50
        "
      >
        {isSubmitting ? "Logging In..." : "Sign In"}
      </button>
    </form>
  );
};

export default LoginForm;