export const globalStyles = theme => ({
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  html: {
    fontSize: '62.5%',
  },
  body: {
    fontWeight: 400,
    fontSize: '1.6rem',
    letterSpacing: '0.02rem',
    wordSpacing: '0.1rem',
    color: theme.colors.gray[7],
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
});
