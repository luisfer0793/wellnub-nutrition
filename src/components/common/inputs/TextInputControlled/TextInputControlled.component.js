import { useController } from 'react-hook-form';

import { TextInput } from '@mantine/core';

const TextInputControlled = ({ name, control, ...restProps }) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return <TextInput {...field} {...restProps} error={error?.message} />;
};

export default TextInputControlled;
