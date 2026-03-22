import classNames from 'classnames';

import type { ButtonProps } from '../consts';
import styles from './Button.module.less';

export const Button = ({
  appearance = 'primary',
  variant,
  children,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.Button, {
        [styles[appearance]]: !!appearance,
        [styles[variant || '']]: !!variant,
      })}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
