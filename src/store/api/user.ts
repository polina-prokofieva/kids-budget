import { auth, db } from '@fb/firebase';
import type { OnboardingValues } from '@pages/inside/onboarding/_types/form';
import type { UserDoc } from '@t/users';
import type { FirebaseError } from 'firebase/app';
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';

import { baseApi } from './base';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserDoc: builder.query<UserDoc, string>({
      async queryFn(uid) {
        try {
          const snap = await getDoc(doc(db, 'users', uid));

          if (!snap.exists()) {
            return {
              error: {
                message: 'User document docs not exist',
              },
            };
          }

          return { data: snap.data() as UserDoc };
        } catch (error) {
          const firebaseError = error as FirebaseError;

          return {
            error: {
              message: firebaseError.message,
              code: firebaseError.code,
            },
          };
        }
      },
    }),

    setUserDoc: builder.mutation<
      OnboardingValues,
      OnboardingValues
    >({
      async queryFn(values: OnboardingValues) {
        try {
          const user = auth.currentUser;

          if (!user)
            return {
              error: {
                message: 'No authenticate user',
              },
            };

          const ref = doc(db, 'users', user.uid);

          await setDoc(
            ref,
            {
              ...values,
              startingBalance: values.totalAmount,
              onboardingCompleted: true,
              updatedAt: serverTimestamp(),
              createdAt: serverTimestamp(),
            },
            { merge: true },
          );

          return { data: values };
        } catch (error) {
          const firebaseError = error as FirebaseError;

          return {
            error: {
              message: firebaseError.message,
              code: firebaseError.code,
            },
          };
        }
      },
    }),
  }),
});

export const { useGetUserDocQuery, useSetUserDocMutation } =
  userApi;
