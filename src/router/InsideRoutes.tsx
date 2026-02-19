import { Navigate, Route } from 'react-router-dom';
import OnboardingPage from '@pages/inside/onboarding/OnboardingPage';
import Profile from '@pages/inside/profile/Profile';

export default function InsideRoutes() {
  return (
    <>
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
    </>
  );
}
