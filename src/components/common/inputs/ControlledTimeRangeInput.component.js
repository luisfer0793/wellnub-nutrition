import { useController } from 'react-hook-form';
import { TimeRangeInput } from '@mantine/dates';

const ControlledTimeRangeInput = ({ name, control, ...restProps }) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return <TimeRangeInput {...field} {...restProps} error={error?.message} />;
};

export default ControlledTimeRangeInput;
