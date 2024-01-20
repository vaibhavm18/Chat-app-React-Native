import React from 'react';
import {GestureResponderEvent} from 'react-native-modal';
import {message} from '../features/user/chatSlice';
import ChatInput from './chat-input';
import ChatBox from './chatbox';

type Props = {
  oldMessage: message[];
  newMessage: message[];
  message: string;
  handelInput: (text: string) => void;
  sendMessage: (event: GestureResponderEvent) => void;
};

export default function ChatRoom({
  newMessage,
  oldMessage,
  message,
  handelInput,
  sendMessage,
}: Props) {
  return (
    <>
      <ChatBox newMessage={newMessage} oldMessage={oldMessage} />
      <ChatInput
        handelInput={handelInput}
        message={message}
        submitText={sendMessage}
      />
    </>
  );
}
