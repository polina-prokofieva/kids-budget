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
  action: () => void;
};

export const IconButton = ({
  Icon,
  type = 'primary',
  action
}: Props) => {
  return (
    <button
      className={classNames(styles.IconButton, {
        [styles[type]]: !!type,
      })}
      onClick={action}
    >
      <Icon />
    </button>
  );
};
