import { auth } from '@fb/firebase';
import { skipToken } from '@reduxjs/toolkit/query';
import { useGetUserDocQuery } from '@store/api/user';

import { LayoutInside } from '../_layout/LayoutInside';

export default function Profile() {
  const firebaseUser = auth.currentUser;

  const {
    data: userDoc,
  } = useGetUserDocQuery(firebaseUser?.uid ?? skipToken);

  if (!firebaseUser) {
    return null;
  }

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
