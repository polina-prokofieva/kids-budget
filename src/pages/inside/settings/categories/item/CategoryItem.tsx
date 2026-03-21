import { IconButton } from '@ui/buttons/icon-button/IconButton';
import { Icon, Pencil, Trash2 } from 'lucide-react';

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

      <div className={styles.description}>
        {description}
      </div>

      <div className={styles.actions}>
        <IconButton Icon={Trash2} type="danger" />
        <IconButton Icon={Pencil} type="secondary" />
      </div>
    </li>
  );
};
