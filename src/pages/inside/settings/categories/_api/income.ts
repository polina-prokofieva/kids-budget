import { db } from '@fb/firebase';
import { baseApi } from '@store/api/base';
import { TAGS } from '@store/tags';
import type { FirebaseError } from 'firebase/app';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';

import type { Category } from '../_types/categories';

export const incomeCategoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getIncomeCategories: builder.query({
      async queryFn(uid) {
        try {
          console.log('uid', uid);

          const snap = await getDocs(
            collection(
              db,
              'users',
              uid,
              'incomeCategories',
            ),
          );

          const data = snap.docs.map((doc) => {
            const category = doc.data();

            return {
              id: doc.id,
              ...category,
              createdAt:
                category.createdAt
                  ?.toDate()
                  .toISOString() ?? null,
              updatedAt:
                category.updatedAt
                  ?.toDate()
                  .toISOString() ?? null,
            };
          }) as Category[];

          return { data };
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
      providesTags: [TAGS.INCOME_CATEGORIES],
    }),

    createIncomeCategory: builder.mutation({
      async queryFn({ uid, data }) {
        try {
          const collectionRef = collection(
            db,
            'users',
            uid,
            'incomeCategories',
          );

          const docRef = await addDoc(collectionRef, {
            ...data,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          });

          return { data: { id: docRef.id, ...data } };
        } catch (error) {
          console.log('error', error);

          return {
            error: {
              status: 'CUSTOM_ERROR',
              error:
                error instanceof Error
                  ? error.message
                  : 'Unknown error',
            },
          };
        }
      },
      invalidatesTags: [TAGS.INCOME_CATEGORIES],
    }),

    deleteIncomeCategory: builder.mutation({
      async queryFn({ uid, categoryId }) {
        try {
          const docRef = doc(
            db,
            'users',
            uid,
            'incomeCategories',
            categoryId,
          );

          await deleteDoc(docRef);

          return { data: undefined };
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
      invalidatesTags: [TAGS.INCOME_CATEGORIES],
    }),
  }),
});

export const {
  useCreateIncomeCategoryMutation,
  useGetIncomeCategoriesQuery,
  useDeleteIncomeCategoryMutation,
} = incomeCategoryApi;
