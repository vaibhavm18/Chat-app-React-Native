import React, {useState} from 'react';
import {GestureResponderEvent} from 'react-native-modal';
import ChatInput from './chat-input';
import ChatBox from './chatbox';

type Props = {
  username: string;
};

export default function ChatRoom({username}: Props) {
  const [messages, setMessages] = useState([
    'Hello, God! asdvkjsdf asdkfjsdfjdsj asdkfjsdf asdkfjsdfj asdkfjd askdfjkdsjfa asdkjfsdkfj',
  ]);

  const [message, setMessage] = useState('');
  const sendMessage = (event: GestureResponderEvent) => {
    if (message.trim() === '') {
      return;
    }
    setMessages(prev => [...prev, message]);
    setMessage('');
  };

  const handelInput = (text: string) => {
    setMessage(text);
  };

  return (
    <>
      <ChatBox messages={messages} />
      <ChatInput
        handelInput={handelInput}
        message={message}
        submitText={sendMessage}
      />
    </>
  );
}
