import classNames from 'classnames';
import * as React from 'react';
import styles from './LayoutRoot.module.css';

interface Props {
  className?: string;
}

const LayoutRoot: React.FC<Props> = ({ children, className }) => <div className={classNames(className, styles.container)}>{children}</div>;

export default LayoutRoot;
