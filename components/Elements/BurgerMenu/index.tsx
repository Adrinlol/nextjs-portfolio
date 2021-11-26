import { BurgerMenuProps } from "helpers/types";
import { BurgerMenuContainer, FirstLine, SecondLine } from "./styles";

export const BurgerMenu = ({ isOpen, onClick }: BurgerMenuProps) => {
  return (
    <BurgerMenuContainer onClick={onClick}>
      <FirstLine isOpen={isOpen} />
      <SecondLine isOpen={isOpen} />
    </BurgerMenuContainer>
  );
};
