import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Data, StringProps } from "helpers/types";
import { Input, Textarea } from "components/Elements/FormElements";
import { Notification } from "components/Elements/Notification";
import { PrimaryButton } from "components/Elements/Button";
import { ContactFormWrapper } from "./styles";

const ContactSection = ({ secrets }: Data) => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notifState, setNotifState] = useState<StringProps>({
    isVisible: false,
    content: "",
    variant: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setNotifState({ isVisible: !notifState.isVisible });
    }, 5000);
  }, [notifState.isVisible]);

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        secrets.service_id,
        secrets.template_id,
        form.current as HTMLFormElement,
        secrets.user_id
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setIsLoading(false);
            setNotifState({
              content:
                "Your message has been sent, I hope to respond in 24 hours.",
              isVisible: true,
              variant: "success",
            });
            event.target.reset();
          }
        },
        () => {
          setIsLoading(false);
          setNotifState({
            content:
              "There was an issue sending your message. Please try again later.",
            isVisible: true,
            variant: "error",
          });
        }
      );
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
      <Notification
        content={notifState.content}
        variant={notifState.variant}
        isVisible={notifState.isVisible}
        onClick={() => setNotifState({ isVisible: false })}
      />
    </ContactFormWrapper>
  );
};

export default ContactSection;
