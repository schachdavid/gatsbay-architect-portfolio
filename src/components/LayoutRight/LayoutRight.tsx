import classNames from 'classnames';
import * as React from 'react';
import styles from './LayoutRight.module.css';

interface Props {
  className?: string;
}

const LayoutRight: React.FC<Props> = ({ children, className }) => <div className={classNames(className, styles.container)}>{children}</div>;

export default LayoutRight;
