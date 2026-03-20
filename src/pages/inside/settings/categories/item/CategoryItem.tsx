import type { Category } from '../_types/categories';
import styles from './CategoryItem.module.less';

export const CategoryItem = ({
  id,
  name,
  description,
}: Category) => {
  return (
    <li className={styles.CategoryItem}>
      <div className={styles.name}>{name}</div>
      <div className={styles.description}>{description}</div>
    </li>
  );
};
