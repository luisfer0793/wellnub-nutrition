import { useController } from 'react-hook-form';
import { Textarea } from '@mantine/core';

const ControlledTextAreaInput = ({ name, control, ...restProps }) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return <Textarea {...field} {...restProps} error={error?.message} />;
};

export default ControlledTextAreaInput;
