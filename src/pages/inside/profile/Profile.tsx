import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "@fb/firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@fb/firebase";

import { LayoutInside } from "../_layout/LayoutInside";
import type { UserDoc } from "@t/users";
import { useGetUserDocQuery } from "@store/api/authApi";
import { Loader } from "@components/loader/Loader";

export default function Profile() {
  const navigate = useNavigate();

  const firebaseUser = auth.currentUser;

  const {
    data: userDoc,
    isLoading,
    isError,
  } = useGetUserDocQuery(firebaseUser?.uid!, {
    skip: !firebaseUser,
  });

  if (!firebaseUser) {
    navigate("/signin");
    return;
  }

  if (!isLoading && !userDoc?.onboardingCompleted) {
    navigate("/onboarding");
  }

  if (isLoading) return <Loader />

  return (
    <LayoutInside title="Profile">
      <section>
        <p>Name: {firebaseUser.displayName}</p>
        <p>Email: {firebaseUser.email}</p>

        {userDoc && (
          <>
            <hr />
            <p>Currency: {userDoc.currency}</p>
            <p>Starting balance: {userDoc.startingBalance}</p>
          </>
        )}

        <button onClick={() => auth.signOut()}>Sign out</button>
      </section>
    </LayoutInside>
  );
}
