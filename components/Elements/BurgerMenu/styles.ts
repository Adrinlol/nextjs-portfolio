import styled from "styled-components";
import { COLOR_BLACK } from "helpers/colorPalette";
import { StringProps } from "helpers/types";

export const BurgerMenuContainer = styled.div`
  width: 27px;
  display: flex;
  z-index: 10;
  position: relative;
  cursor: pointer;
  min-height: 40px;
  align-items: center;
  margin-top: -10px;

  span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: ${COLOR_BLACK};
    transition-timing-function: ease;
    transition-duration: 0.5s;
    border-radius: 0px;
    transform-origin: center;
    position: absolute;
  }
`;

export const FirstLine = styled.span<StringProps>`
  transform: ${({ isOpen }) =>
    `translate3d(0,${isOpen ? "7px" : "0px"},0) rotate(${
      isOpen ? `45deg` : "0"
    })`};
`;

export const SecondLine = styled.span<StringProps>`
  transform: ${({ isOpen }) =>
    `translate3d(0,${isOpen ? "7px" : "14px"},0) rotate(${
      isOpen ? `-45deg` : "0"
    })`};
`;
