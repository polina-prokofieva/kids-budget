import { TOP_MENU } from './_menu';
import styles from './Menu.module.less';

export const Menu = () => {
  return (
    <nav className={styles.Menu}>
      <ul>
        {TOP_MENU.map(({ label, path }) => (
          <li key={label}>
            <a href={path}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
