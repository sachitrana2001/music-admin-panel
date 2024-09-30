import React, { useState } from "react";
import Button from "../../../Components/Custom/Button";
import FormInput from "../../../Components/Custom/FormInput";
import { useForm } from "react-hook-form";
import AuthLayout from "../../../Layout/AuthLayout";
import { Link } from "react-router-dom";
import { AccessRoutes, MainRoutes } from "../../../Config";

const ForgotPasswordForm = (props) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSendMail = async (values) => {
    console.log(values);
  };

  return (
    <AuthLayout>
      <div className={`w-[450px]`}>
        {loading ? (
          <>
            <h3 className="mb-1">Check your email</h3>
            <p>We have sent a password recovery instruction to your email</p>
          </>
        ) : (
          <>
            <h3 className="mb-1">Forgot Password</h3>
            <p>
              Please enter your email address to receive a verification code
            </p>
          </>
        )}

        <form onSubmit={handleSubmit(onSendMail)}>
          <div className={loading ? "hidden" : ""}>
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
              errors={errors} // Pass the specific error message
            />
          </div>
          <Button loading={loading}>
            {loading ? "Resend Email" : "Send Email"}
          </Button>
          <div className="mt-4 text-center">
            <span>Back to </span>
            <Link
              to={`${MainRoutes.APP}${MainRoutes.ACCESS}${AccessRoutes.SIGNIN}`}
            >
              {" "}
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordForm;
