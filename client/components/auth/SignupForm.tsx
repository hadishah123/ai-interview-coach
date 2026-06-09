"use client";
import { useAuth } from "@/store/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthInput from "./AuthInput";

import { signupSchema, SignupFormData } from "@/types/auth";

import { signupUser } from "@/services/authService";

const SignupForm = () => {
  const router = useRouter();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      const response = await signupUser(data);

      console.log(response);

      toast.success("Account created successfully");

      login(response.token);

      router.push("/dashboard");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Invalid credentials");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
    <AuthInput
      label="Full Name"
      type="text"
      placeholder="John Doe"
      register={register("name")}
      error={errors.name?.message}
    />

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
      {isSubmitting ? "Creating Account..." : "Create Account"}
    </button>

    <p className="mt-6 text-center text-sm text-slate-500">
      Already have an account?{" "}
      <a
        href="/login"
        className="font-medium text-indigo-600 hover:text-indigo-700"
      >
        Sign in
      </a>
    </p>
  </form>
);
};

export default SignupForm;
