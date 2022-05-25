import { useAuthentication } from 'hooks';
import { useStyles } from './UserProfileCard.styles';
import { Avatar, Text, Title } from '@mantine/core';
import { ROLES } from '../../../../utils/constants.util';
import { useMediaQuery } from '@mantine/hooks';

const UserProfileCard = () => {
  const { user } = useAuthentication();

  const isResponsive = useMediaQuery('(max-width: 576px)');

  const {
    classes: { card, description, infoWrapper, name, avatar },
  } = useStyles();

  return (
    <div className={card}>
      <Avatar
        src={user.image}
        alt={user.name}
        radius="50%"
        size={isResponsive ? 'md' : 'lg'}
        className={avatar}
      />
      <div className={infoWrapper}>
        <Title order={5} className={name}>
          {user.name}
        </Title>
        <Text component="p" className={description}>
          Perfil de{' '}
          {
            {
              [ROLES.CLIENT]: 'Cliente',
              [ROLES.PARTNER]: 'Partner',
              [ROLES.NUTRITIONIST]: 'Nutriólogo',
              [ROLES.ADMIN]: 'Administrador',
            }[user.role]
          }
        </Text>
      </div>
    </div>
  );
};

export default UserProfileCard;
