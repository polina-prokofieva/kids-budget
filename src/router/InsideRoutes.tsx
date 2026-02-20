import { Navigate, Route, Routes } from 'react-router-dom';
import OnboardingPage from '@inside/onboarding/OnboardingPage';
import Profile from '@pages/inside/profile/Profile';

export default function InsideRoutes() {
  return (
    <Routes>
      <Route
        path='/profile'
        element={<Profile />}
      />
      <Route
        path='/onboarding'
        element={<OnboardingPage />}
      />
      <Route
        path='*'
        element={<Navigate to='/profile' />}
      />
    </Routes>
  );
}
