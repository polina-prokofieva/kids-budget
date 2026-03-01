import type { JSX } from 'react';

import { Header } from './header/Header';
import styles from './LayoutInside.module.less';
import { Menu } from './menu/Menu';

type Props = {
  title: string;
  children: JSX.Element;
};

export const LayoutInside = ({
  title,
  children,
}: Props) => {
  return (
    <div className={styles.LayoutInside}>
      <Menu />
      <Header title={title} />
      <main>{children}</main>
    </div>
  );
};
