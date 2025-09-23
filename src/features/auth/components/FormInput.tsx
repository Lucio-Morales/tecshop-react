import type { InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput = ({ label, error, ...props }: FormInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input {...props} className="rounded-md border border-gray-300 px-4 py-3 text-sm outline-none " />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
};

export default FormInput;
