import { useController } from 'react-hook-form';
import { PasswordInput } from '@mantine/core';

const PasswordInputControlled = ({ name, control, ...restProps }) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return <PasswordInput {...field} {...restProps} error={error?.message} />;
};

export default PasswordInputControlled;
