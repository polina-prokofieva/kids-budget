import { auth } from '@fb/firebase';
import { IconButton } from '@ui/buttons/icon-button/IconButton';
import { Pencil, Trash2 } from 'lucide-react';

import { useDeleteIncomeCategoryMutation } from '../_api/income';
import type { Category } from '../_types/categories';
import styles from './CategoryItem.module.less';

export const CategoryItem = ({
  id,
  name,
  description,
}: Category) => {
  const [deleteIncomeCategory] =
    useDeleteIncomeCategoryMutation();

  const firebaseUser = auth.currentUser;
  const uid = firebaseUser?.uid;

  const deleteCategory = () => {
    deleteIncomeCategory({uid, categoryId: id});
  };

  return (
    <li className={styles.CategoryItem}>
      <div className={styles.name}>{name}</div>

      <div className={styles.description}>
        {description}
      </div>

      <div className={styles.actions}>
        <IconButton
          Icon={Trash2}
          appearance='danger'
          onClick={deleteCategory}
        />
        <IconButton
          Icon={Pencil}
          appearance='secondary'
          onClick={() => {}}
        />
      </div>
    </li>
  );
};
