import { Message } from '../types';
import {
  PartnerMessageContent,
  MyMessage,
  MyMessageContent,
  PartnerMessage,
  Wrapper,
  MessageCreatedAt,
} from './Messages.style';

type MessagesProps = {
  messages: Message[];
};

export const Messages = ({ messages }: MessagesProps) => {
  const myProfile = {
    id: '1',
  };
  return (
    <Wrapper>
      {messages.map((message, i) => {
        if (message.user.id === myProfile.id) {
          return (
            <MyMessage key={i}>
              <MessageCreatedAt>{message.createdAt}</MessageCreatedAt>
              <MyMessageContent>{message.content}</MyMessageContent>
            </MyMessage>
          );
        } else {
          return (
            <PartnerMessage key={i}>
              <PartnerMessageContent>{message.content}</PartnerMessageContent>
              <MessageCreatedAt>{message.createdAt}</MessageCreatedAt>
            </PartnerMessage>
          );
        }
      })}
    </Wrapper>
  );
};
