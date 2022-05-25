import { useController } from 'react-hook-form';
import { DateRangePicker } from '@mantine/dates';

const ControlledDateRangeInput = ({ name, control, ...restProps }) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return <DateRangePicker {...field} {...restProps} error={error?.message} />;
};

export default ControlledDateRangeInput;
