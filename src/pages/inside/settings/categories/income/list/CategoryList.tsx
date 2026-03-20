import { auth } from '@fb/firebase';
import { skipToken } from '@reduxjs/toolkit/query';

import { useGetIncomeCategoriesQuery } from '../../_api/income';
import { CategoryItem } from '../../item/CategoryItem';
import styles from './CategoryList.module.less';

export const CategoryList = () => {
  const firebaseUser = auth.currentUser;

  console.log('firebaseUser?.uid', firebaseUser?.uid);

  const { data, error } = useGetIncomeCategoriesQuery(
    firebaseUser?.uid ?? skipToken,
  );

  console.log('data', data);

  if (!data) return null;

  return (
    <ul className={styles.CategoryList}>
      {data.map((category) => (
        <CategoryItem
          key={category.id}
          {...category}
        />
      ))}
    </ul>
  );
};
