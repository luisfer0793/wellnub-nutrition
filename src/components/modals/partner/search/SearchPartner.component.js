import { Fragment } from 'react';
import { Button, Text } from '@mantine/core';

const SearchPartner = ({ id, context, innerProps }) => {
  const onClickHandler = () => {
    console.log('Se debe der buscar');
  };

  return (
    <Fragment>
      <Text>Aquí debe de ir el formulario para buscar</Text>
      <Button fullWidth mt="md" color="green" onClick={onClickHandler}>
        Buscar
      </Button>
    </Fragment>
  );
};

export default SearchPartner;
