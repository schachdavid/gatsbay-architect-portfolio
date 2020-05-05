import { Link } from 'gatsby';
import * as React from 'react';
import BaseLayout from '../layouts/baseLayout';

const NotFoundPage = () => (
  <BaseLayout>
    <h1>404: Page not found.</h1>
    <p>
      You've hit the void. <Link to="/">Go back.</Link>
    </p>
  </BaseLayout>
);

export default NotFoundPage;
