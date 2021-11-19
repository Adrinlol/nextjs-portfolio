import styled from "styled-components";
import { InputProps, StringProps } from "helpers/types";

export const Textarea = ({ placeholder, name, label }: InputProps) => {
  return (
    <label htmlFor={label}>
      <span>{label}</span>
      <StyledTextarea
        name={name}
        spellCheck="false"
        placeholder={placeholder}
        required
      />
    </label>
  );
};

export const Input = ({ placeholder, label, name }: InputProps) => {
  return (
    <label htmlFor={label}>
      <span>{label}</span>
      <input
        name={name}
        spellCheck="false"
        placeholder={placeholder}
        required
      />
    </label>
  );
};

const StyledTextarea = styled.textarea<StringProps>`
  min-height: 10rem;
  max-height: 30rem;
  max-width: 100%;
`;
