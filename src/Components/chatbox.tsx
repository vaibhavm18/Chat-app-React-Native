import React from 'react';
import {ScrollView} from 'react-native';
import tailwind from 'twrnc';
import Chat from './chat';

export default function ChatBox() {
  return (
    <ScrollView style={tailwind`flex-grow`}>
      <Chat
        message="Hello, God!"
        date="21/02/2023"
        time="12:06 PM"
        username="Vaibhav"
      />
    </ScrollView>
  );
}
