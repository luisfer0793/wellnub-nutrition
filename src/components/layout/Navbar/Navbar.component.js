import { forwardRef } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Divider, ScrollArea, Stack, Title } from '@mantine/core';
import { useNavbarLayout } from 'hooks';
import * as CONSTANTS from 'utils/constants.util';
import NavbarLink from '../../common/links/NavbarLink/NavbarLink.component';
import UserProfileCard from '../../common/cards/UserProfile/UserProfileCard.component';
import { useStyles } from './Navbar.styles';

const Navbar = (_, ref) => {
  const { isVisible } = useNavbarLayout();

  const {
    classes: { linksWrapper, navbar, sectionTitle, section, grow },
    cx,
  } = useStyles({ isVisible });

  const ROLE = 'CLIENT';

  return (
    <nav className={navbar} ref={ref}>
      <section className={cx(section)}>
        <UserProfileCard />
      </section>
      <Divider />
      <ScrollArea scrollbarSize={4} offsetScrollbars>
        <section className={cx(section, grow)}>
          <Title order={5} className={sectionTitle}>
            General
          </Title>
          <Stack spacing="xs" className={linksWrapper}>
            {CONSTANTS[`NAVBAR_${ROLE}_LINKS`].map(link => (
              <NavbarLink key={nanoid()} link={link} />
            ))}
          </Stack>
        </section>
      </ScrollArea>
    </nav>
  );
};

export default forwardRef(Navbar);
