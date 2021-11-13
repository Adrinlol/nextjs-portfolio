import { Navigation } from "components/Layout/Navigation";
import { ExternalLinkProps, StringProps } from "helpers/types";
import ScrollToTop from "components/Layout/ScrollToTop";

import { Flex, StyledContainer } from "components/Layout/Container/styles";
import {
  FooterContainer,
  GridContainer,
  FlexLinks,
} from "components/Layout/Footer/styles";

const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);

export const Footer = ({ darkTheme }: StringProps) => {
  return (
    <FooterContainer darkTheme={darkTheme}>
      <StyledContainer>
        <Flex justify="center" direction="column">
          <hr />
          <GridContainer>
            <FlexLinks>
              <Navigation href="/" text="Home" />
              <Navigation href="/projects" text="Projects" />
              <Navigation href="/testimonials" text="Testimonials" />
            </FlexLinks>
            <FlexLinks>
              <ExternalLink href="https://twitter.com/Adrinlolx">
                Twitter
              </ExternalLink>
              <ExternalLink href="https://github.com/Adrinlol">
                GitHub
              </ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/lasha-kakabadze/">
                LinkedIn
              </ExternalLink>
            </FlexLinks>
            <FlexLinks>
              <ExternalLink href="/">Test</ExternalLink>
              <Navigation href="/top-tracks" text="Test" />
            </FlexLinks>
          </GridContainer>
          <ScrollToTop darkTheme={darkTheme} />
        </Flex>
      </StyledContainer>
    </FooterContainer>
  );
};
