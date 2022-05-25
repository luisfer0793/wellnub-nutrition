import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Overlay } from '@mantine/core';
import { useElementSize, useMediaQuery, useScrollLock } from '@mantine/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavbarLayout } from 'hooks';
import { default as Header } from '../Header/Header.component';
import { default as Navbar } from '../Navbar/Navbar.component';
import { useStyles } from './ApplicationShell.styles';

const ApplicationShell = () => {
  const { width: navWidth, ref } = useElementSize();

  const { isVisible, handleClose } = useNavbarLayout();

  const [, setScrollLock] = useScrollLock();

  const isResponsive = useMediaQuery('(max-width: 576px');

  const {
    classes: { content, overlay },
  } = useStyles({ navWidth });

  useEffect(() => {
    if (isVisible && isResponsive) {
      setScrollLock(true);
    } else {
      setScrollLock(false);
    }
  }, [isVisible, isResponsive, setScrollLock]);

  return (
    <>
      <Navbar ref={ref} />
      <section className={content}>
        <AnimatePresence>
          {isResponsive && isVisible && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Overlay
                color="#0b1015"
                onClick={handleClose}
                className={overlay}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <Header />
        <Outlet />
      </section>
    </>
  );
};

export default ApplicationShell;
