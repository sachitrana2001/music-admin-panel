// components/auth/Login.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AuthLayout from "../../../Layout/AuthLayout";
import FormInput from "../../../Components/Custom/FormInput";
import Button from "../../../Components/Custom/Button";


const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    setLoading(true);
    console.log(data); // Handle your sign-in logic here
  };

  return (
    <AuthLayout>
      <div className="w-[450px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            register={register}
            validation={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            }}
            errors={errors} // Pass errors object
          />

          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            register={register}
            validation={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            }}
            errors={errors}
          />

          <Button loading={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
