import { graphql } from 'gatsby';
import * as React from 'react';
import Navigation from '../components/Navigation/Navigation';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import BaseLayout from '../layouts/baseLayout';
import styles from './index.module.css';

interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          fields: {
            slug: string;
          };
          frontmatter: {
            title: string;
            mainImgUrl: string;
          };
        };
      }>;
    };
  };
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const projectPagesData = data.allMarkdownRemark.edges.map(edge => {
    return {
      name: edge.node.frontmatter.title,
      slug: edge.node.fields.slug,
      imgUrl: edge.node.frontmatter.mainImgUrl
    };
  });

  const projectCards = projectPagesData.map(projectPageData => (
    <ProjectCard linkTo={projectPageData.slug} name={projectPageData.name} imgSrc={projectPageData.imgUrl} className={styles.projectCard} />
  ));

  return (
    <BaseLayout
      leftContent={
        <div className={styles.navContainer}>
          <Navigation links={[{ name: 'projectos', to: '/', current: true }, { name: 'contacto', to: '/' }, { name: 'about', to: '/' }]} />
        </div>
      }
    >
      {projectCards}
    </BaseLayout>
  );
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            mainImgUrl
          }
        }
      }
    }
  }
`;
