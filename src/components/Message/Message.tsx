import React from "react";
import { formatRelative } from "date-fns";
import {
  ContentWrapper,
  MessageContainer,
  MessagePhoto,
  MessageSender,
  MessageText,
  MessageTime,
} from "./Message.styles";

export interface IMessage {
  displayName: string;
  photoURL: string;
  createdAt: any;
  text: string;
}

function Message({ displayName, text, photoURL, createdAt }: IMessage) {
  return (
    <MessageContainer>
      <MessagePhoto src={photoURL} alt={displayName} />
      <ContentWrapper>
        <MessageSender>{displayName}</MessageSender>
        {createdAt && (
          <MessageTime>
            {formatRelative(new Date(createdAt), new Date())}
          </MessageTime>
        )}
        <MessageText>{text}</MessageText>
      </ContentWrapper>
    </MessageContainer>
  );
}

export default React.memo(Message);
