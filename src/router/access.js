import { Routes, Route, Navigate } from "react-router-dom";
import { AccessRoutes, MainRoutes } from "../Config";
import SignIn from "../Pages/Auth/SignIn";
import ForgotPasswordForm from "../Pages/Auth/ForgotPassword";
import ResetPasswordForm from "../Pages/Auth/ResetPassword";

export const AuthRouter = () => {
  return (
    <Routes>
      {/* Redirect to sign-in by default */}
      <Route
        path={`${MainRoutes.APP}${MainRoutes.ACCESS}`}
        element={<Navigate to={`${MainRoutes.APP}${MainRoutes.ACCESS}${AccessRoutes.SIGNIN}`} replace />}
      />

      {/* Sign-in route */}
      <Route
        path={`${MainRoutes.APP}${MainRoutes.ACCESS}${AccessRoutes.SIGNIN}`}
        element={<SignIn />}
      />

      {/* Forgot Password route */}
      <Route
        path={`${MainRoutes.APP}${MainRoutes.ACCESS}${AccessRoutes.FORGOT_PASSWORD}`}
        element={<ForgotPasswordForm />}
      />

      {/* Reset Password route */}
      <Route
        path={`${MainRoutes.APP}${MainRoutes.ACCESS}${AccessRoutes.RESET_PASSWORD}`}
        element={<ResetPasswordForm />}
      />

      {/* Redirect all unknown routes to sign-in */}
      <Route
        path="*"
        element={<Navigate to={`${MainRoutes.APP}${MainRoutes.ACCESS}${AccessRoutes.SIGNIN}`} replace />}
      />
    </Routes>
  );
};
