import { graphql, Link } from 'gatsby';
import * as React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import BaseLayout from '../layouts/baseLayout';
import styles from './project.module.css';

interface ProjectTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: {
          name: string;
          url: string;
        };
      };
    };
    markdownRemark: {
      html: string;
      excerpt: string;
      frontmatter: {
        title: string;
        year: string;
      };
    };
  };
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ data }) => (
  <BaseLayout
    leftContent={
      <>
        <Link to="/" className={styles.backButton}>
          <FiArrowLeft strokeWidth="0.8" />
          Redro
        </Link>
        <div className={styles.projectInfoContainer}>
          <div className={styles.headLineContainer}>
            <h1 className={styles.projectTitle}>{data.markdownRemark.frontmatter.title}</h1>
            <span className={styles.year}>{data.markdownRemark.frontmatter.year}</span>
          </div>

          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>
      </>
    }
  >
    <img
      src="https://images.unsplash.com/photo-1540755705438-5a464b07be8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
      className={styles.projectImg}
      alt={`${data.markdownRemark.frontmatter.title} Project`}
    />
  </BaseLayout>
);

export default ProjectTemplate;

export const query = graphql`
  query ProjectTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        year
      }
    }
  }
`;
