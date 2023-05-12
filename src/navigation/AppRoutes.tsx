import { Route, Routes } from "react-router-dom";
import { SignUp } from "../pages/SignUp.js";
import { SignUpSuccess } from "../pages/SignUpSuccess.js";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/success" element={<SignUpSuccess />} />
    </Routes>
  );
};
