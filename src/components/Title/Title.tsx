import { Link } from 'gatsby';
import * as React from 'react';
import styles from './Title.module.css';

interface Props {
  title: string;
}

const Title: React.FC<Props> = ({ title }) => (
  <div className={styles.title}>
    <Link to="/" className={styles.link}>
      {title.toLowerCase()}
    </Link>
  </div>
);

export default Title;
