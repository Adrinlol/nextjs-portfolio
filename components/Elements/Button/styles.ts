import styled from "styled-components";
import { COLOR_BLACK } from "helpers/colorPalette";

export const PrimaryButtonContainer = styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  box-sizing: border-box;
  border-radius: 0.25rem;
  height: 46px;
  padding: 12px 30px;
  margin-top: 34px;
  border: 0;
  width: 180px;
`;

export const TextButtonContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: auto;
  cursor: pointer;
  margin-top: 34px;
  transition: all 0.2s;

  svg {
    position: absolute;
    right: -10px;
    transition: all 0.3s;

    path {
      color: ${COLOR_BLACK};
    }
  }

  &:hover,
  &:active,
  &:focus {
    svg {
      right: -22px;
    }
  }
`;

export const Text = styled.p`
  position: relative;
  display: block;
  padding: 8px 15px 8px 0;
  transition: all 0.8s cubic-bezier(0.8, 0, 0.2, 1);

  ::after {
    content: "";
    position: absolute;
    height: 2px;
    left: 0px;
    width: calc(100% - 15px);
    top: 95%;
    background-color: ${COLOR_BLACK};
  }
`;

export const CloseButton = styled.div<any>`
  position: relative;
  height: 50%;
  cursor: pointer;
`;
