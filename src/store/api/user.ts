import { baseApi } from './base';
import { doc, getDoc } from 'firebase/firestore';
import type { FirebaseError } from 'firebase/app';

import { db } from '@fb/firebase';
import type { UserDoc } from '@t/users';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserDoc: builder.query<UserDoc, string>({
      async queryFn(uid) {
        try {
          const snap = await getDoc(doc(db, 'users', uid));

          if (!snap.exists()) {
            return { error: { message: 'User document docs not exist' } }
          }

          return { data: snap.data() as UserDoc }
        } catch (error) {
          const firebaseError = error as FirebaseError;

          return {
            error: {
              message: firebaseError.message,
              code: firebaseError.code,
            }
          }
        }
      }
    }),
  }),
});

export const { useGetUserDocQuery } = userApi;
