import { useStyles } from './PageLayout.styles';

const PageLayout = ({ children }) => {
  const {
    classes: { layout },
  } = useStyles();

  return <div className={layout}>{children}</div>;
};

export default PageLayout;
