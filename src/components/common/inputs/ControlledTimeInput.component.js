import {useController} from "react-hook-form";
import {TimeInput} from "@mantine/dates";

const ControlledTimeInput = ({name, control, ...restProps}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });
  
  return <TimeInput {...field} {...restProps} error={error?.message} />
}

export default ControlledTimeInput