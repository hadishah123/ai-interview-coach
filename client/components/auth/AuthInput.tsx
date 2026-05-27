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
      <label className="text-sm text-gray-300">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className="w-full rounded-xl border border-white/10 bg-[#1a1a1a] px-4 py-3 outline-none transition focus:border-white/30"
      />

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

export default AuthInput;