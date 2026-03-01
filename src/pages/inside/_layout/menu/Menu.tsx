import { Link } from 'react-router-dom';

import { TOP_MENU } from './_menu';
import styles from './Menu.module.less';

export const Menu = () => {
  return (
    <nav className={styles.Menu}>
      <ul>
        {TOP_MENU.map(({ label, path }) => (
          <li key={label}>
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
