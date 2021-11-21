import Link from "next/link";
import { Spinner } from "components/Elements/Spinner";
import {
  PrimaryButtonProps,
  StringProps,
  CloseModalButtonProps,
} from "helpers/types";
import {
  PrimaryButtonContainer,
  TextButtonContainer,
  Text,
  CloseButton,
} from "./styles";

export const PrimaryButton = ({
  text,
  loading,
  disabled,
}: PrimaryButtonProps) => {
  return (
    <PrimaryButtonContainer disabled={disabled} name="submit">
      {loading && !disabled ? <Spinner /> : text}
    </PrimaryButtonContainer>
  );
};

export const TextButton = ({ text, onClick }: StringProps) => {
  return (
    <>
      {text && (
        <Link href={onClick as string} passHref>
          <TextButtonContainer>
            <Text>{text}</Text>
          </TextButtonContainer>
        </Link>
      )}
    </>
  );
};

export const CloseModalButton = ({ onClick }: CloseModalButtonProps) => {
  return <CloseButton onClick={onClick}>x</CloseButton>;
};
