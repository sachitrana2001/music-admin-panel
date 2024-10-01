// components/auth/Login.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../../Components/Custom/FormInput";
import Button from "../../../Components/Custom/Button";
import { Link } from "react-router-dom";
import { AccessRoutes, MainRoutes } from "../../../Config";
import { getAPI, postAPI } from "../../../services/apisMethod";
import { AuthAPIs } from "../../../apis/client";
import { useDispatch } from "react-redux";
import { loginSuccessful } from "../../../redux/slices/authSlice";
import { AuthLayout } from "../../../Layout";

const SignIn = () => {
  const dispatch=useDispatch()
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (payload) => {
    setLoading(true);
    console.log(payload);
    postAPI(AuthAPIs.SIGNIN,payload)
      .then(({statusCode,data}) => {
         console.log(statusCode,data);
         
        dispatch(loginSuccessful(data.accessToken));
        
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(setLoading(false));
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
          <div className="mb-2 flex justify-end">
            <Link
              to={`${MainRoutes.APP}${MainRoutes.ACCESS}${AccessRoutes.FORGOT_PASSWORD}`}
            >
              <span className="text-red-600 hover:underline cursor-pointer">
                Forgot Password?
              </span>
            </Link>
          </div>

          <Button loading={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
