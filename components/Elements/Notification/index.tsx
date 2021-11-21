import { Flex } from "components/Layout/Container/styles";
import {
  NotificationContainer,
  NotificationContent,
} from "components/Elements/Notification/styles";

export const Notification = ({ content, isVisible, onClick }: any) => {
  return (
    <NotificationContainer onClick={onClick}>
      {isVisible && (
        <NotificationContent>
          <Flex>{content}</Flex>
        </NotificationContent>
      )}
    </NotificationContainer>
  );
};
