import { Navbar as LayoutNavbar, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <LayoutNavbar width={{ base: 200 }}>
      <ul>
        <li>
          <Text component={Link} to="calendario">
            Mi calendario
          </Text>
        </li>
        <li>
          <Text component={Link} to="pases">
            Pases
          </Text>
        </li>
      </ul>
    </LayoutNavbar>
  );
};

export default Navbar;
