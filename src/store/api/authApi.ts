import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { FirebaseError } from "firebase/app";
import type { UserDoc } from "@t/users";
import { doc, getDoc } from "firebase/firestore";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      async queryFn({ name, email, password }) {
        try {
          const userCred = await createUserWithEmailAndPassword(auth, email, password);

          await updateProfile(userCred.user, { displayName: name });

          return { data: userCred.user };
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

    signIn: builder.mutation({
      async queryFn({ email, password }) {
        try {
          const userCred = await signInWithEmailAndPassword(auth, email, password);
          return { data: userCred.user };
        } catch (error) {
          const firebaseError = error as FirebaseError;
          return { error: { message: firebaseError.message, code: firebaseError.code } };
        }
      },
    }),

    getUserDoc: builder.query<UserDoc, string>({
      async queryFn(uid) {
        try {
          const snap = await getDoc(doc(db, 'users', uid));

          if (!snap.exists()) {
            return { error: { message: 'User document docs not exist' } }
          }

          return { data: snap.data() }
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

export const {
  useSignUpMutation,
  useSignInMutation,
  useGetUserDocQuery
} = authApi;
