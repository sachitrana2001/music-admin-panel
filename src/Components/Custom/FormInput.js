import React from "react";

const FormInput = ({
  label,
  type,
  name,
  placeholder,
  options,
  checked, // For checkbox and radio
  accept, // For file input
  min,
  max, // For range and number input
  step, // For range input
  register, // React Hook Form register function
  validation, // Validation rules
  errors, // Errors from React Hook Form
}) => {
  const hasError = !!errors[name]; // Check if the field has an error

  const inputBaseClass =
    "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2";
  const errorClass = "border-red-500 focus:ring-red-500"; // For error styling
  const normalClass = "border-gray-300 focus:ring-blue-500"; // Default styling

  switch (type) {
    case "select":
      return (
        <div className="mb-4">
          {label && (
            <label className="block mb-1 font-semibold text-lefttext-[14px] text-[#6B7280]">
              {label}
            </label>
          )}
          <select
            name={name}
            {...register(name, validation)} // React Hook Form's register function
            className={`${inputBaseClass} ${
              hasError ? errorClass : normalClass
            }`}
          >
            {options?.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {hasError && (
            <span className="text-red-500 text-sm">
              {errors[name]?.message}
            </span>
          )}
        </div>
      );

    case "textarea":
      return (
        <div className="mb-4">
          {label && (
            <label className="block font-semibold  text-left mb-1 text-[14px] text-[#6B7280]">
              {label}
            </label>
          )}
          <textarea
            name={name}
            placeholder={placeholder}
            {...register(name, validation)} // React Hook Form's register function
            className={`${inputBaseClass} ${
              hasError ? errorClass : normalClass
            }`}
          />
          {hasError && (
            <span className="text-red-500 text-sm">
              {errors[name]?.message}
            </span>
          )}
        </div>
      );

    case "checkbox":
    case "radio":
      return (
        <div className="mb-4 flex items-center">
          <input
            type={type}
            name={name}
            checked={checked}
            {...register(name, validation)} // React Hook Form's register function
            className={`mr-2 ${hasError ? "border-red-500" : ""}`} // Add border-red if error
          />
          {label && (
            <label className="text-[14px] font-semibold  text-[#6B7280]">{label}</label>
          )}
          {hasError && (
            <span className="text-red-500 text-sm">
              {errors[name]?.message}
            </span>
          )}
        </div>
      );

    case "file":
      return (
        <div className="mb-4">
          {label && (
            <label className="block font-semibold  mb-1 text-[14px] text-[#6B7280]">
              {label}
            </label>
          )}
          <input
            type="file"
            name={name}
            accept={accept}
            {...register(name, validation)} // React Hook Form's register function
            className={`${inputBaseClass} ${
              hasError ? errorClass : normalClass
            }`}
          />
          {hasError && (
            <span className="text-red-500 text-sm">
              {errors[name]?.message}
            </span>
          )}
        </div>
      );

    case "range":
      return (
        <div className="mb-4">
          {label && (
            <label className="block mb-1 font-semibold  text-[14px] text-[#6B7280]">
              {label}
            </label>
          )}
          <input
            type="range"
            name={name}
            min={min}
            max={max}
            step={step}
            {...register(name, validation)} // React Hook Form's register function
            className="w-full"
          />
          <div className="text-sm text-gray-500">{errors[name]?.message}</div>
        </div>
      );

    case "color":
      return (
        <div className="mb-4">
          {label && (
            <label className="block mb-1 font-semibold text-[14px] text-[#6B7280]">
              {label}
            </label>
          )}
          <input
            type="color"
            name={name}
            {...register(name, validation)} // React Hook Form's register function
            className="w-full h-10 border-none cursor-pointer"
          />
          {hasError && (
            <span className="text-red-500 text-sm">
              {errors[name]?.message}
            </span>
          )}
        </div>
      );

    default:
      return (
        <div className="mb-4 ">
          {label && (
            <label className="block mb-1 font-semibold  text-left text-[14px] text-[#6B7280]">
              {label}
            </label>
          )}
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            min={min}
            max={max}
            step={step}
            {...register(name, validation)} // React Hook Form's register function
            className={`${inputBaseClass} ${
              hasError ? errorClass : normalClass
            }`}
          />
          {hasError && (
            <span className="text-red-500 text-sm">
              {errors[name]?.message}
            </span>
          )}
        </div>
      );
  }
};

export default FormInput;
