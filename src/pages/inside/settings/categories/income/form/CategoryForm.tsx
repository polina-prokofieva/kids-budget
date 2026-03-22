import {
  type SubmitHandler,
  useForm,
} from 'react-hook-form';
import { auth } from '@fb/firebase';
import { FormError } from '@ui/form/error/FormError';

import { useCreateIncomeCategoryMutation } from '../../_api/income';
import type { CategoryFormValues } from '../../_types/form';
import styles from './CategoryForm.module.less';

export const CategoryForm = ({
  closeForm,
}: {
  closeForm: () => void;
}) => {
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
    <form
      onSubmit={handleSubmit(submit)}
      className={styles.CategoryForm}
    >
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

      <div className={styles.actions}>
        <button
          type='button'
          onClick={closeForm}
        >
          Cancel
        </button>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};
