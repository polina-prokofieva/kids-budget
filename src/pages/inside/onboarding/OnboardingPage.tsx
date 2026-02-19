import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader } from '@components/loader/Loader';
import { auth } from '@fb/firebase';
import { skipToken } from '@reduxjs/toolkit/query';
import { useGetUserDocQuery } from '@store/api/user';

import { LayoutInside } from '../_layout/LayoutInside';
import OnboardingForm from './form/OnboardingForm';

export default function OnboardingPage() {
  const navigate = useNavigate();

  const firebaseUser = auth.currentUser;

  const {
    data: userDoc,
    isLoading,
    isError,
  } = useGetUserDocQuery(firebaseUser?.uid ?? skipToken);

  useEffect(() => {
    if (!firebaseUser) {
      navigate('/signin');
      return;
    }

    if (!isLoading && userDoc?.onboardingCompleted) {
      navigate('/profile');
    }
  }, [firebaseUser, userDoc, isLoading, navigate]);

  if (isLoading) return <Loader />;

  return (
    <LayoutInside title='Onboarding'>
      <OnboardingForm />
    </LayoutInside>
  );
}
