import React, { useEffect, useRef, useState } from "react";

import {
  ref,
  push,
  onValue,
  remove,
  ThenableReference,
} from "firebase/database";
import { rtdb } from "../../firebase.config";
import { Message, IMessage } from "../Message";
import {
  ChannelContainer,
  ChannelForm,
  ChannelInput,
  ChannelStart,
  TypingUsers,
} from "./Channel.styles";
import Spinner from "../Spinner/Spinner";
import { Button } from "../UI/index";

interface MessageObj extends IMessage {
  id?: string;
  uid?: string;
}

interface IUserTyping {
  displayName: string;
  uid: string;
  self: boolean;
}

let typingUserID: ThenableReference;
let isTypingTimeoutRef: NodeJS.Timeout;
const isTypingTimeout = 1000; // ms

function Channel({ user }: any) {
  const [messages, setMessages] = useState<MessageObj[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newMessage, setNewMessage] = useState("");
  const [usersTyping, setUsersTyping] = useState<IUserTyping[]>([]);
  const chatRef = useRef<HTMLUListElement>(null);

  const { uid, displayName, photoURL } = user;

  const scrollChat = () => {
    if (!chatRef.current) return;
    setTimeout(() => {
      chatRef.current!.scrollTo({
        top: chatRef.current!.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  };

  useEffect(() => {
    scrollChat();
    window.addEventListener("resize", scrollChat);
  }, [messages, usersTyping]);

  // Chat Messages
  useEffect(() => {
    const messagesDBRef = ref(rtdb, "messages/");
    // Set listener and callback fn
    onValue(messagesDBRef, (snapshot) => {
      const data = snapshot.val();
      const messageArray: MessageObj[] = [];
      for (let messageID in data) {
        const messageObj = {
          text: data[messageID].text,
          id: messageID,
          displayName: data[messageID].displayName,
          createdAt: data[messageID].createdAt,
          photoURL: data[messageID].photoURL,
        };
        messageArray.push(messageObj);
      }
      setMessages(messageArray);
      setIsLoading(false);
    });
  }, []);

  // Typing Users
  useEffect(() => {
    const usersTypingDBRef = ref(rtdb, "usersTyping/");
    // Set listener and callback fn
    onValue(usersTypingDBRef, (snapshot) => {
      const data = snapshot.val() as IUserTyping[];
      const usersTypingArray = [];
      for (let userID in data) {
        usersTypingArray.push({
          displayName: data[userID].displayName as string,
          uid: data[userID].uid as string,
          self: data[userID].uid === uid,
        });
      }
      setUsersTyping(usersTypingArray);
    });
  }, [uid]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value);

    // If current user is not included in the usersTyping list add him, otherwise just reset the timer to remove the user from the list
    if (!usersTyping.some((user) => user.uid === uid)) {
      typingUserID = push(ref(rtdb, "usersTyping/"), { displayName, uid });
    }
    // reset the isTyping timeout
    clearTimeout(isTypingTimeoutRef);
    isTypingTimeoutRef = setTimeout(() => {
      remove(typingUserID);
    }, isTypingTimeout);
  };

  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newMessageObj: MessageObj = {
      text: newMessage,
      createdAt: new Date().toISOString(),
      uid,
      displayName,
      photoURL,
    };

    remove(typingUserID);
    push(ref(rtdb, "messages/"), newMessageObj);
    setNewMessage("");
  };

  let usersTypingText;
  const externalUsersTyping = usersTyping.filter((user) => !user.self);
  switch (externalUsersTyping.length) {
    case 0:
      usersTypingText = null;
      break;
    case 1:
      usersTypingText = `${externalUsersTyping[0].displayName} is typing...`;
      break;
    case 2:
      usersTypingText = `${externalUsersTyping
        .map((user) => user.displayName)
        .join(" and ")} are typing...`;
      break;
    default:
      usersTypingText = `${externalUsersTyping[0].displayName} and ${
        externalUsersTyping.length - 1
      } others are typing...`;
      break;
  }

  return (
    <>
      <ChannelContainer ref={chatRef}>
        <ChannelStart>This is the beginning of the chat</ChannelStart>
        {!messages.length && !isLoading ? (
          <ChannelStart>No messages yet</ChannelStart>
        ) : (
          messages.map((message) => <Message key={message.id} {...message} />)
        )}
        {isLoading && <Spinner />}
      </ChannelContainer>
      <ChannelForm onSubmit={handleOnSubmit}>
        {usersTypingText && <TypingUsers>{usersTypingText}</TypingUsers>}
        <ChannelInput
          type="text"
          value={newMessage}
          onChange={handleOnChange}
          placeholder="Type your message here..."
          onMouseOver={(e) => e.currentTarget.focus()}
        />
        <Button type="submit" disabled={!newMessage}>
          Send
        </Button>
      </ChannelForm>
    </>
  );
}

export default Channel;
