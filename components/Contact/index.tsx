import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Input, Textarea } from "components/Elements/FormElements";
import { PrimaryButton } from "components/Elements/Button";
import { ContactFormWrapper } from "./styles";

const service_id = process.env.EMAILJS_SERVICE_ID;
const template_id = process.env.EMAILJS_TEMPLATE_ID;
const user_id = process.env.EMAILJS_USER_ID;

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    emailjs
      .sendForm(
        service_id,
        template_id,
        form.current as HTMLFormElement,
        user_id
      )
      .then(
        (result) => {
          setIsLoading(false);
          console.log("result", result);
        },
        (error) => {
          setIsLoading(false);
          console.log("error", error);
        }
      );
    event.target.reset();
  };

  return (
    <ContactFormWrapper>
      <form ref={form} onSubmit={handleSubmit} autoComplete="off">
        <Input label="Name" name="name" placeholder="What's your name?" />
        <Input
          label="Email"
          name="email"
          placeholder="What's your email address?"
        />
        <Textarea
          label="Message"
          name="subject"
          placeholder="What's your message?"
        />
        <PrimaryButton text="Submit" loading={isLoading} />
      </form>
    </ContactFormWrapper>
  );
};

export default ContactSection;
