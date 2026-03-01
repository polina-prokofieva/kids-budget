import styles from './Menu.module.less';

export const Menu = () => {
  return (
    <nav className={styles.Menu}>
      <ul>
        <li>
          <a href='/inside/profile'>Profile</a>
        </li>
      </ul>
    </nav>
  );
};
