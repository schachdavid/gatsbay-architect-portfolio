import * as React from 'react';
import Title from '../Title/Title';
import styles from './LayoutLeft.module.css';

interface Props {
  title: string;
}

const LayoutLeft: React.FC<Props> = ({ children, title }) => (
  <div className={styles.container}>
    <Title title={title} />
    {children}
  </div>
);

export default LayoutLeft;
