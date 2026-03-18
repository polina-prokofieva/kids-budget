import { useState } from 'react';

import { CategoryForm } from './form/CategoryForm';

export const IncomeCategories = () => {
  const [isFormOpened, setIsFormOpened] = useState(false);

  return (
    <div>
      {!isFormOpened && (
        <button onClick={() => setIsFormOpened(true)}>
          Add new category
        </button>
      )}

      {isFormOpened && <CategoryForm />}
    </div>
  );
};
