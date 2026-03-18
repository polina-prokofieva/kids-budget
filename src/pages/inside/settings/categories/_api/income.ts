import { db } from '@fb/firebase';
import { baseApi } from '@store/api/base';
import {
  addDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore';

export const incomeCategoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createIncomeCategory: builder.mutation({
      async queryFn({ uid, data }) {
        try {
          console.log('uid', uid);
          console.log('data', data);

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

          console.log('created doc id', docRef.id);

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
      // invalidatesTags: ['IncomeCategories'],
    }),
  }),
});

export const { useCreateIncomeCategoryMutation } = incomeCategoryApi;
