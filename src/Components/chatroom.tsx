import React from 'react';
import {message} from '../features/user/chatSlice';
import ChatInput from './chat-input';
import ChatBox from './chatbox';

type Props = {
  oldMessage: message[];
  newMessage: message[];
  message: string;
  handelInput: (text: string) => void;
  sendMessage: (userId: string) => void;
  id: string;
};

export default function ChatRoom({
  newMessage,
  oldMessage,
  message,
  handelInput,
  sendMessage,
  id,
}: Props) {
  return (
    <>
      <ChatBox newMessage={newMessage} oldMessage={oldMessage} />
      <ChatInput
        id={id}
        handelInput={handelInput}
        message={message}
        submitText={sendMessage}
      />
    </>
  );
}
