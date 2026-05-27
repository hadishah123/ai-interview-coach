"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthInput from "./AuthInput";

import {
  signupSchema,
  SignupFormData,
} from "@/types/auth";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
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
        className="w-full rounded-xl bg-white py-3 font-semibold text-black transition hover:opacity-90"
      >
        Create Account
      </button>
    </form>
  );
};

export default SignupForm;