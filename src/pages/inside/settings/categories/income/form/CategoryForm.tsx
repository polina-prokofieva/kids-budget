import {
  type SubmitHandler,
  useForm,
} from 'react-hook-form';
import { auth } from '@fb/firebase';
import { FormError } from '@ui/form/error/FormError';

import { useCreateIncomeCategoryMutation } from '../../_api/income';
import type { CategoryFormValues } from '../../_types/form';

export const CategoryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormValues>();

  const [createIncomeCategory, { isLoading, error }] =
    useCreateIncomeCategoryMutation();

  const firebaseUser = auth.currentUser;
  const uid = firebaseUser?.uid;

  const submit: SubmitHandler<CategoryFormValues> = async (
    values: CategoryFormValues,
  ) => {
    await createIncomeCategory({ uid, data: values });
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input
        type='text'
        placeholder='Category name'
        {...register('name')}
      />
      {errors.name && (
        <FormError>Name is required</FormError>
      )}

      <input
        type='text'
        placeholder='Category description'
        {...register('description')}
      />

      <button type='submit'>Add</button>
    </form>
  );
};
