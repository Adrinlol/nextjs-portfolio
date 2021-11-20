import type { NextPage } from "next";
import { ContentWrapper } from "pages";
import Container from "components/Layout/Container";
import ContactSection from "components/Contact";

const Contact: NextPage = () => {
  return (
    <Container>
      <ContentWrapper>
        <h2>{"Hello. I've been expecting you."}</h2>
        <p>
          {
            "If you have any questions, feel free to drop me a line. I'll try to get back to you as soon as I can. That's a promise!"
          }
        </p>
      </ContentWrapper>
      <ContactSection />
    </Container>
  );
};

export default Contact;
