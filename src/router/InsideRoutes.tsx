import { Navigate, Route, Routes } from 'react-router-dom';
import { Loader } from '@components/loader/Loader';
import { auth } from '@fb/firebase';
import OnboardingPage from '@inside/onboarding/OnboardingPage';
import Profile from '@inside/profile/Profile';
import { skipToken } from '@reduxjs/toolkit/query';
import { useGetUserDocQuery } from '@store/api/user';

export default function InsideRoutes() {
  const firebaseUser = auth.currentUser;

  const { data: userDoc, isLoading } = useGetUserDocQuery(
    firebaseUser?.uid ?? skipToken,
  );

  const onboardingCompleted =
    !isLoading && userDoc?.onboardingCompleted;

  if (isLoading) return <Loader />;

  if (onboardingCompleted) {
    return (
      <Routes>
        <Route
          path='/profile'
          element={<Profile />}
        />
        <Route
          path='*'
          element={<Navigate to='/profile' />}
        />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path='/onboarding'
        element={<OnboardingPage />}
      />
      <Route
        path='*'
        element={<Navigate to='/onboarding' />}
      />
    </Routes>
  );
}
