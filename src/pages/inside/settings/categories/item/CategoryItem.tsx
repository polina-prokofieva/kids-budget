import type { Category } from '../_types/categories';
import styles from './CategoryItem.module.less';

export const CategoryItem = ({
  id,
  name,
  description,
}: Category) => {
  return (
    <li className={styles.CategoryItem}>
      {name}
      {description}
    </li>
  );
};
