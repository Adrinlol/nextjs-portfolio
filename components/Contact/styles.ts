import styled from "styled-components";
import { devices } from "helpers/displayDevice";

export const ContactFormWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 3rem;
  gap: 3rem;
  grid-auto-flow: dense;

  form {
    grid-column: 1/13;
    text-align: start;

    span {
      margin: 1.5rem 0;
      padding-left: 1rem;
      display: block;

      @media ${devices.mobileL} {
        padding-left: 0.5rem;
      }
    }
  }

  @media ${devices.desktopM} {
    grid-template-columns: none;
    grid-gap: 3rem 0;
    gap: 3rem 0;
  }
`;
