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
      <label className="text-sm font-medium">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default AuthInput;