import { useState } from 'react';

import { CategoryForm } from './form/CategoryForm';
import styles from './IncomeCategories.module.less';
import { CategoryList } from './list/CategoryList';

export const IncomeCategories = () => {
  const [isFormOpened, setIsFormOpened] = useState(false);

  const closeForm = () => {
    setIsFormOpened(false);
  };

  return (
    <div className={styles.IncomeCategories}>
      <div className={styles.list}>
        {!isFormOpened && (
          <button onClick={() => setIsFormOpened(true)}>
            Add new category
          </button>
        )}
        <CategoryList />
      </div>

      {isFormOpened && <CategoryForm closeForm={closeForm} />}
    </div>
  );
};
