import { useNavigate } from "react-router-dom";
import { skipToken } from '@reduxjs/toolkit/query';

import { Loader } from "@components/loader/Loader";
import { LayoutInside } from "../_layout/LayoutInside";
import { OnboardingForm } from "./form/OnboardingForm";
import { useGetUserDocQuery } from "@store/api/authApi";
import { auth } from "@fb/firebase";

export const OnboardingPage = () => {
  const navigate = useNavigate();

  const firebaseUser = auth.currentUser;

  const {
    data: userDoc,
    isLoading,
    isError,
  } = useGetUserDocQuery(firebaseUser?.uid ?? skipToken);

  if (!firebaseUser) {
    navigate("/signin");
    return;
  }

  if (!isLoading && userDoc?.onboardingCompleted) {
    navigate("/profile");
  }

  console.log('userDoc', userDoc);

  if (isLoading) return <Loader />

  return (
    <LayoutInside title="Onboarding">
      <OnboardingForm />
    </LayoutInside>
  );
}
