import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { FirebaseError } from "firebase/app";

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
          };        }
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
  }),
});

export const { useSignUpMutation, useSignInMutation } = authApi;


