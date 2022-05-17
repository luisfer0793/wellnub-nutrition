import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import PageLayout from '../layout/PageLayout/PageLayout.component';

const WithHelmet = ({
  metaTags = [],
  title = 'Mi página',
  children,
  noLayout,
}) => {
  return (
    <Fragment>
      <Helmet>
        {metaTags.map(({ id, rest }) => (
          <meta key={id} {...rest} />
        ))}
        <title>{title}</title>
      </Helmet>
      {!noLayout ? <PageLayout>{children}</PageLayout> : children}
    </Fragment>
  );
};

export default WithHelmet;
