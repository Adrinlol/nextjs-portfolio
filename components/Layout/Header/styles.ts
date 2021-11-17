import styled from "styled-components";
import { StringProps } from "helpers/types";
import { devices } from "helpers/displayDevice";
import {
  COLOR_BLACK,
  COLOR_DARK_GRAY,
  COLOR_WHITE,
} from "helpers/colorPalette";

import { Flex } from "components/Layout/Container/styles";

export const StickyNav = styled.nav<StringProps>`
  position: sticky;
  z-index: 10;
  top: 0;
  background-color: ${({ darkTheme }) =>
    darkTheme ? COLOR_BLACK : COLOR_WHITE};

  a {
    color: ${({ darkTheme }) => (darkTheme ? COLOR_DARK_GRAY : COLOR_BLACK)};
  }

  .active {
    color: ${({ darkTheme }) => (darkTheme ? COLOR_WHITE : COLOR_BLACK)};
  }

  button {
    padding: 0.75rem;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background-color: ${({ darkTheme }) =>
      darkTheme ? COLOR_WHITE : COLOR_BLACK};
  }
`;

export const Wrapper = styled(Flex)<any>`
  position: relative;
  padding: 6rem 0 3rem 0;

  h1 {
    margin: 0;
    cursor: pointer;
  }

  button {
    margin-left: 1rem;
  }

  a:not(:first-child) {
    padding: 1rem;
  }

  a:first-child {
    padding-right: 1rem;
  }

  @media ${devices.mobileL} {
    padding: 2rem 0;

    a:last-child {
      display: none;
    }
  }
`;
