import { auth } from '@fb/firebase';

import styles from './Header.module.less';

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  return (
    <header className={styles.Header}>
      <h2>{title}</h2>
      <button onClick={() => auth.signOut()}>
        Sign out
      </button>
    </header>
  );
};
