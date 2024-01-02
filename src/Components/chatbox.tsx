import React from 'react';
import {ScrollView} from 'react-native';
import tailwind from 'twrnc';
import Chat from './chat';

type Props = {
  message: string;
};
export default function ChatBox({message}: Props) {
  return (
    <ScrollView style={tailwind`flex-grow`}>
      <Chat
        message={message}
        date="21/02/2023"
        time="12:06 PM"
        username="Vaibhav"
      />
    </ScrollView>
  );
}
