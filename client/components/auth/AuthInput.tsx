import { UseFormRegisterReturn } from "react-hook-form";

type AuthInputProps = {
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
};

const AuthInput = ({
  label,
  type,
  placeholder,
  register,
  error,
}: AuthInputProps) => {
  return (
  <div className="space-y-2">
    <label className="text-sm font-medium text-slate-700">
      {label}
    </label>

    <input
      type={type}
      placeholder={placeholder}
      {...register}
      className="
      w-full
      rounded-xl
      border
      border-slate-300
      bg-white
      px-4
      py-3
      text-slate-900
      outline-none
      transition
      focus:border-indigo-500
      focus:ring-4
      focus:ring-indigo-100
      "
    />

    {error && (
      <p className="mt-1 text-sm text-red-500">
        {error}
      </p>
    )}
  </div>
);
};

export default AuthInput;