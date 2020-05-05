import classNames from 'classnames';
import { Link } from 'gatsby';
import * as React from 'react';
import styles from './ProjectCard.module.css';

interface Props {
  name: string;
  linkTo: string;
  imgSrc: string;
  className?: string;
}

const ProjectCard: React.FC<Props> = ({ name, linkTo, imgSrc, className }) => (
  <Link to={linkTo} className={classNames(styles.projectCard, className)}>
    <img src={imgSrc} className={styles.projectImg} alt={`${name} Project`} />
    <span className={styles.projectName}>{name}</span>
  </Link>
);

export default ProjectCard;
