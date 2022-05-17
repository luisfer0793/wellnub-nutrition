import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Avatar, Container, Paper, Text, Title } from '@mantine/core';

import { WithHelmet } from 'components';

import { nutritionistSelector } from 'redux/slices/nutritionists/nutritionists.selector';

import { NUTRITIONIST_PROFILE_META_TAGS } from 'utils/constants.util';

import { useStyles } from './NutritionistProfile.style';

const NutritionistProfilePage = () => {
  const { id } = useParams();

  const nutritionist = useSelector(nutritionistSelector(id));

  const { classes, cx } = useStyles({ banner: nutritionist.bannerImage });

  return (
    <WithHelmet
      metaTags={NUTRITIONIST_PROFILE_META_TAGS}
      title={`${nutritionist.name} | ${nutritionist.title} | Wellnub`}
    >
      <Container size="xl">
        <div className={classes.grid}>
          <Paper
            withBorder
            component="header"
            shadow="sm"
            radius="sm"
            className={cx(classes.papper, classes.header)}
          >
            <div className={classes.headerTitleWrapper}>
              <div className={classes.avatarWrapper}>
                <Avatar size="xl" radius="50%" src={nutritionist.image} />
              </div>
              <div className={classes.headerNamesWrapper}>
                <Title order={1} className={classes.headerTitle}>
                  {nutritionist.name}
                </Title>
                <Title order={2} className={classes.headerSubtitle}>
                  {nutritionist.title}
                </Title>
              </div>
            </div>
          </Paper>

          <Paper
            withBorder
            shadow="sm"
            radius="sm"
            className={cx(classes.papper, classes.numbers)}
          >
            <Text>50</Text>
            <Text>50</Text>
          </Paper>
          <Paper
            withBorder
            shadow="sm"
            radius="sm"
            className={cx(classes.papper, classes.about)}
          >
            <Title order={2}>A cerca de mi</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              asperiores aspernatur atque debitis, eligendi ex fugit nostrum
              numquam tempora veritatis!
            </Text>
          </Paper>
          <Paper
            withBorder
            shadow="sm"
            radius="sm"
            className={cx(classes.papper, classes.social)}
          >
            <Title order={2}>Social</Title>
            <Text>50</Text>
          </Paper>
        </div>
      </Container>
    </WithHelmet>
  );
};

export default NutritionistProfilePage;
