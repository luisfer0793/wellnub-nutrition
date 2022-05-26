import { useAuthentication } from 'hooks';
import { Avatar, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ROLES } from 'utils/constants.util';
import { useStyles } from './UserProfileCard.styles';

const UserProfileCard = () => {
  const { user } = useAuthentication();

  const isResponsive = useMediaQuery('(max-width: 576px)');

  const {
    classes: { card, description, infoWrapper, name, avatar, avatarWrapper },
  } = useStyles();

  return (
    <div className={card}>
      <div className={avatarWrapper}>
        <Avatar
          src={user.image}
          alt={user.name}
          size={isResponsive ? 'md' : 'lg'}
          className={avatar}
        />
      </div>
      <div className={infoWrapper}>
        <Title order={5} className={name}>
          {user.name}
        </Title>
        <Text component="p" className={description}>
          {
            {
              [ROLES.CLIENT]: 'Cliente',
              [ROLES.PARTNER]: 'Partner',
              [ROLES.NUTRITIONIST]: 'Nutriólogo',
              [ROLES.ADMIN]: 'Administrador',
            }[user.role]
          }{' '}
          Wellnub
        </Text>
      </div>
    </div>
  );
};

export default UserProfileCard;
