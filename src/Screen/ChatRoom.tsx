import React from 'react';
import {View} from 'react-native';
import tailwind from 'twrnc';
import ChatBox from '../Components/chat';
import ChatInput from '../Components/chat-input';
import Profile from '../Components/profile';

export default function ChatRoom() {
  return (
    <View style={tailwind`bg-black h-full border border-white flex`}>
      <Profile />
      <ChatBox />
      <ChatInput />
    </View>
  );
}
