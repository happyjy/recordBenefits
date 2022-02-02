import { TextField } from "@mui/material";
import styled from "styled-components";

const AddTextFeild = styled(TextField)`
  /* height: 1.5rem; */
  border: 1px solid yellow;
  width: 100%;
`;

const Input = ({
  type,
  min,
  placeholder,
  size,
  value,
  required,
  onChange,
  onKeyPress,
}) => {
  return (
    <AddTextFeild
      type={type}
      min={min}
      placeholder={placeholder}
      size={size}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      required
    />
  );
};

export default Input;
