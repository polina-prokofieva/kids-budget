import { useNavigate } from 'react-router-dom';
import { Loader } from '@components/loader/Loader';
import { auth } from '@fb/firebase';
import { skipToken } from '@reduxjs/toolkit/query';
import { useGetUserDocQuery } from '@store/api/user';

import { LayoutInside } from '../_layout/LayoutInside';

export default function Profile() {
  const navigate = useNavigate();

  const firebaseUser = auth.currentUser;

  const {
    data: userDoc,
    isLoading,
    isError,
  } = useGetUserDocQuery(firebaseUser?.uid ?? skipToken);

  if (!firebaseUser) {
    navigate('/signin');
    return;
  }

  if (!isLoading && !userDoc?.onboardingCompleted) {
    navigate('/onboarding');
  }

  if (isLoading) return <Loader />;

  return (
    <LayoutInside title='Profile'>
      <section>
        <p>Name: {firebaseUser.displayName}</p>
        <p>Email: {firebaseUser.email}</p>

        {userDoc && (
          <>
            <hr />
            <p>Currency: {userDoc.currency}</p>
            <p>
              Starting balance: {userDoc.startingBalance}
            </p>
          </>
        )}

        <button onClick={() => auth.signOut()}>
          Sign out
        </button>
      </section>
    </LayoutInside>
  );
}
