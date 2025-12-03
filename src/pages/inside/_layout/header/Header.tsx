import styles from './Header.module.less';

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  return (
    <header className={styles.Header}>
      <h2>{title}</h2>
      <button>Sign out</button>
    </header>
  )
};
