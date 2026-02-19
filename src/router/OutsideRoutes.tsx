import { Navigate, Route } from "react-router-dom";
import SignIn from "@pages/outside/signin/SignIn";
import SignUp from "@pages/outside/signup/SignUp";

export default function OutsideRoutes() {
  return (
    <>
      <Route
        path='/signup'
        element={<SignUp />}
      />
      <Route
        path='/signin'
        element={<SignIn />}
      />
      <Route
        path='*'
        element={<Navigate to='/signin' />}
      />
    </>
  );
}
