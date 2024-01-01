import React from 'react';
import {View} from 'react-native';
import tailwind from 'twrnc';
import ChatInput from '../Components/chat-input';
import ChatBox from '../Components/chatbox';
import Profile from '../Components/profile';

export default function ChatRoom() {
  return (
    <View style={tailwind`bg-black h-full  flex p-2`}>
      <Profile />
      <ChatBox />
      <ChatInput />
    </View>
  );
}
