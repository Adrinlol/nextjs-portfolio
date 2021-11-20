import type { NextPage } from "next";
import { ContentWrapper } from "pages";
import Container from "components/Layout/Container";
import ContactSection from "components/Contact";
import { StringProps } from "helpers/types";

const Contact: NextPage = (secrets: StringProps) => {
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
      <ContactSection secrets={secrets} />
    </Container>
  );
};

export default Contact;

export async function getServerSideProps() {
  return {
    props: {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_USER_ID,
    },
  };
}
