import type {
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import classNames from 'classnames';
import type { LucideProps } from 'lucide-react';

import type { ButtonProps } from '../consts';
import styles from './IconButton.module.less';

type Props = ButtonProps & {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
};

export const IconButton = ({
  Icon,
  appearance = 'primary',
  onClick,
}: Props) => {
  return (
    <button
      className={classNames(styles.IconButton, {
        [styles[appearance]]: !!appearance,
      })}
      onClick={onClick}
    >
      <Icon />
    </button>
  );
};
