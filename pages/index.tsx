import type { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";
import Container from "components/Layout/Container";
import { StringProps } from "helpers/types";
import { devices } from "helpers/displayDevice";
import { Flex } from "components/Layout/Container/styles";

import ProfilePicture from "public/assets/png/Lasha.png";

const Home: NextPage = () => {
  return (
    <Container>
      <HeroFlex align="flex-start">
        <ContentWrapper>
          <RoundImage
            src={ProfilePicture}
            alt="Lasha"
            width="100px"
            height="100px"
          />
          <Flex justify="flexStart" align="baseline">
            <h2>Welcome to my Portfolio</h2> 👋
          </Flex>
          <p>
            Passionate React Developer with 3+ years of experience blending the
            design with programming skills to deliver an immersive and engaging
            user experience through efficient website development, proactive
            feature optimization, and relentless debugging.
          </p>
        </ContentWrapper>
      </HeroFlex>
    </Container>
  );
};

export default Home;

export const ContentWrapper = styled.div<StringProps>`
  h2 {
    margin: 2rem 0.5rem 2rem 0;
  }

  ${Flex} {
    font-size: 1.5rem;
  }

  @media ${devices.mobileL} {
    margin-top: 2rem;
  }
`;

export const RoundImage = styled(Image)`
  border-radius: 50%;
`;

const HeroFlex = styled(Flex)`
  @media ${devices.mobileL} {
    flex-direction: column-reverse;
  }
`;
