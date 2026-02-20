import { Navigate, Route, Routes } from 'react-router-dom';
import SignIn from '@outside/signin/SignIn';
import SignUp from '@outside/signup/SignUp';

export default function OutsideRoutes() {
  return (
    <Routes>
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
    </Routes>
  );
}
