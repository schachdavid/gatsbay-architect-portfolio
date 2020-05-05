import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';
import LayoutLeft from '../components/LayoutLeft/LayoutLeft';
import LayoutRight from '../components/LayoutRight/LayoutRight';
import LayoutRoot from '../components/LayoutRoot/LayoutRoot';

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string;
    };
  };
}

interface Props {
  leftContent?: React.ReactNode;
}

const BaseLayout: React.FC<Props> = ({ leftContent, children }) => (
  <StaticQuery
    query={graphql`
      query BaseLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords }
          ]}
        />
        <LayoutLeft title={data.site.siteMetadata.title}>{leftContent || null}</LayoutLeft>
        <LayoutRight>{children}</LayoutRight>
      </LayoutRoot>
    )}
  />
);

export default BaseLayout;
