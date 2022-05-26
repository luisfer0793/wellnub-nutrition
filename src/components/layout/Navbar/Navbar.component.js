import { forwardRef, Fragment } from 'react';
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
    classes: { linksWrapper, navbar, sectionTitle, section, grow, divider },
    cx,
  } = useStyles({ isVisible });

  const ROLE = 'CLIENT';

  const LINKS = CONSTANTS[`NAVBAR_${ROLE}_LINKS`];

  return (
    <nav className={navbar} ref={ref}>
      <section className={cx(section)}>
        <UserProfileCard />
      </section>
      <Divider className={divider} />
      <ScrollArea scrollbarSize={4} offsetScrollbars>
        <section className={cx(section, grow)}>
          {Object.keys(LINKS).map(key => (
            <Fragment key={nanoid()}>
              <Title order={5} className={sectionTitle}>
                {key}
              </Title>
              <Stack spacing="xs" className={linksWrapper}>
                {LINKS[key].map(link => (
                  <NavbarLink key={nanoid()} link={link} />
                ))}
              </Stack>
            </Fragment>
          ))}
        </section>
      </ScrollArea>
    </nav>
  );
};

export default forwardRef(Navbar);
