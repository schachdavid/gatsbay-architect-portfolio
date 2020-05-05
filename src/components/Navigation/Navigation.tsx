import { Link } from 'gatsby';
import * as React from 'react';
import { v1 as uuid } from 'uuid';
import styles from './Navigation.module.css';

interface Props {
  links: { name: string; to: string; current?: boolean }[];
}

const Navigation: React.FC<Props> = ({ links }) => {
  const linkComponents = links.map(link => (
    <li className={link.current ? styles.currentLi : ''}>
      <Link to={link.to} key={uuid()}>
        {link.name}
      </Link>
    </li>
  ));
  return links.length > 0 ? (
    <ul className={styles.list}>
      <nav className={styles.navigation}>{linkComponents}</nav>
    </ul>
  ) : null;
};

export default Navigation;
