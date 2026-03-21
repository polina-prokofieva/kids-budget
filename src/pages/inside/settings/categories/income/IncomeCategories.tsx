import { useState } from 'react';

import { CategoryForm } from './form/CategoryForm';
import styles from './IncomeCategories.module.less';
import { CategoryList } from './list/CategoryList';

export const IncomeCategories = () => {
  const [isFormOpened, setIsFormOpened] = useState(false);

  return (
    <div className={styles.IncomeCategories}>
      {!isFormOpened && (
        <div className={styles.list}>
          <button onClick={() => setIsFormOpened(true)}>
            Add new category
          </button>
          <CategoryList />
        </div>
      )}

      {isFormOpened && <CategoryForm />}
    </div>
  );
};
