import Image from "next/image";
import { Flex } from "components/Layout/Container/styles";
import {
  NotificationContainer,
  NotificationContent,
} from "components/Elements/Notification/styles";

export const Notification = ({ content, isVisible, onClick, variant }: any) => {
  return (
    <>
      {isVisible && content && (
        <NotificationContainer onClick={onClick}>
          <NotificationContent>
            <Flex>
              <div>
                <Image
                  alt={variant}
                  placeholder="blur"
                  blurDataURL="blur"
                  width="20px"
                  height="20px"
                  layout="fixed"
                  src={`/assets/svg/${
                    variant === "success" ? "check-mark.svg" : "cross.svg"
                  }`}
                />
              </div>
              <p>{content}</p>
            </Flex>
          </NotificationContent>
        </NotificationContainer>
      )}
    </>
  );
};
