import type {
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import classNames from 'classnames';
import type { LucideProps } from 'lucide-react';

import type { ButtonType } from '../consts';
import styles from './IconButton.module.less';

type Props = {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  type?: ButtonType;
};

export const IconButton = ({ Icon, type = 'primary' }: Props) => {
  return (
    <button
      className={classNames(styles.IconButton, {
        [styles[type]]: !!type,
      })}
    >
      <Icon />
    </button>
  );
};
