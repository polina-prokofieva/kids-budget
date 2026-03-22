import classNames from 'classnames';

import type { ButtonProps } from '../consts';
import styles from './Button.module.less';

export const Button = ({
  appearance = 'primary',
  children,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.Button, {
        [styles[appearance]]: !!appearance,
      })}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
