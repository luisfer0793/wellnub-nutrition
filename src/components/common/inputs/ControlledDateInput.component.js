import { useController } from 'react-hook-form';
import { DatePicker } from '@mantine/dates';

const ControlledDateInput = ({ name, control, ...restProps }) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return <DatePicker {...field} {...restProps} error={error?.message} />;
};

export default ControlledDateInput;
