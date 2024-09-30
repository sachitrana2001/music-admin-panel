import React, { useState } from "react";

import FormInput from "../../../Components/Custom/FormInput";
import Button from "../../../Components/Custom/Button";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

const ResetPasswordForm = (props) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    console.log(values);
  };

  const onContinue = () => {
    Navigate("/sign-in");
  };

  return (
    <div>
      <div className="mb-6">
        {/* {resetComplete ? (
          <>
            <h3 className="mb-1">Reset done</h3>
            <p>Your password has been successfully reset</p>
          </>
        ) : (
          <>
            <h3 className="mb-1">Set new password</h3>
            <p>Your new password must different to previos password</p>
          </>
        )} */}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={loading ? "hidden" : ""}>
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
          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            register={register}
            validation={{
              required: "Confirm Password is required",
              validate: (value) => {
                if (watch("password") != value) {
                  return "Your passwords do no match";
                }
              },
            }}
            errors={errors}
          />
        </div>
        <Button loading={loading}>
          {loading ? "Resend Email" : "Send Email"}
        </Button>
        <div className="mt-4 text-center">
          <span>Back to </span>
          Sign in
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
